// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

// import dock components
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <nav className='fixed right-[2%] top-0 z-50 h-screen w-16 flex flex-col items-center justify-center'>
      <Dock 
        className='flex-col items-center justify-center gap-y-10 py-8 bg-white/10 backdrop-blur-sm rounded-full'
        vertical={true}
        magnification={60}
        distance={100}
      >
        {navData.map((link, index) => (
          <Link href={link.path} key={index}>
            <DockItem
              className={`aspect-square rounded-full bg-secondary/80 hover:bg-secondary ${
                link.path === pathname ? 'ring-2 ring-accent' : ''
              }`}
            >
              <DockLabel>{link.name}</DockLabel>
              <DockIcon>
                <div className={`text-xl ${
                  link.path === pathname ? 'text-accent' : 'text-white'
                }`}>
                  {link.icon}
                </div>
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </nav>
  );
};

export default Nav;
