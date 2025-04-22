'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
  vertical?: boolean;
};
type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};
type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};
type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

type DocContextType = {
  mouseX: MotionValue;
  mouseY: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
  vertical: boolean;
};
type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
  vertical = false,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
  }, [magnification]);

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{
        height: vertical ? 'auto' : height,
        width: vertical ? height : 'auto',
        scrollbarWidth: 'none',
      }}
      className={cn(
        'flex max-w-full overflow-x-auto',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
    >
      <motion.div
        onMouseMove={({ pageX, pageY }) => {
          isHovered.set(1);
          mouseX.set(pageX);
          mouseY.set(pageY);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
          mouseY.set(Infinity);
        }}
        className={cn(
          'flex w-fit gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900',
          vertical ? 'flex-col py-4' : 'flex-row',
          className
        )}
        style={{ height: vertical ? 'auto' : panelHeight, width: vertical ? panelHeight : 'auto' }}
        role='toolbar'
        aria-label='Application dock'
      >
        <DockProvider value={{ mouseX, mouseY, spring, distance, magnification, vertical }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { distance, magnification, mouseX, mouseY, spring, vertical } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(
    vertical ? mouseY : mouseX,
    (val) => {
      const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
      return vertical
        ? val - domRect.y - domRect.height / 2
        : val - domRect.x - domRect.width / 2;
    }
  );

  const sizeTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const size = useSpring(sizeTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ 
        width: vertical ? 'auto' : size,
        height: vertical ? size : 'auto'
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
      tabIndex={0}
      role='button'
      aria-haspopup='true'
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, { size, isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>;
  const isHovered = restProps['isHovered'] as MotionValue<number>;
  const [isVisible, setIsVisible] = useState(false);
  const { vertical } = useDock();

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ 
            opacity: 1, 
            y: vertical ? 0 : -10,
            x: vertical ? 10 : 0
          }}
          exit={{ opacity: 0, y: 0, x: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white',
            vertical ? 'left-full top-1/2 -translate-y-1/2 ml-2' : '-top-6 left-1/2 -translate-x-1/2',
            className
          )}
          role='tooltip'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>;
  const size = restProps['size'] as MotionValue<number>;
  const { vertical } = useDock();

  const sizeTransform = useTransform(size, (val) => val / 2);

  return (
    <motion.div
      style={{ 
        width: vertical ? 'auto' : sizeTransform,
        height: vertical ? sizeTransform : 'auto'
      }}
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel }; 