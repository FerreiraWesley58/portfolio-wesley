import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPython,
} from 'react-icons/si';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { IconCloudDemo } from '../../components/ui/icon-cloud-demo';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

//  about data - movido para fora do componente para evitar recriação a cada render
const aboutData = [
  {
    id: 'skills',
    title: 'Habilidades',
    info: [
      {
        id: 'web-dev',
        title: 'Web Development',
        icons: [
          { id: 'python', icon: <SiPython />, name: 'Python' },
          { id: 'html', icon: <FaHtml5 />, name: 'HTML5' },
          { id: 'css', icon: <FaCss3 />, name: 'CSS3' },
          { id: 'js', icon: <FaJs />, name: 'JavaScript' },
          { id: 'node', icon: <FaNodeJs />, name: 'Node.js' },
          { id: 'react', icon: <FaReact />, name: 'React.js' },
        ],
      },
      {
        id: 'design',
        title: 'UI/UX Design',
        icons: [
          { id: 'figma', icon: <FaFigma />, name: 'Figma' },
          { id: 'xd', icon: <SiAdobexd />, name: 'Adobe XD' },
          { id: 'ps', icon: <SiAdobephotoshop />, name: 'Photoshop' },
        ],
      },
    ],
  },
  {
    id: 'awards',
    title: 'Prêmios',
    info: [
      {
        id: 'award-1',
        title: 'Smart Factory - Vencedor',
        stage: '2022 - 2023',
      },
      {
        id: 'award-2',
        title: 'Talento Reconhecido - Reconhecimento',
        stage: '2023 - 2023',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experiência',
    info: [
      {
        id: 'exp-1',
        title: 'Analista de Sistemas - Samsung',
        stage: '2021 - 2024',
      },
      {
        id: 'exp-2',
        title: 'Técnico em Automação - Honda',
        stage: '2017 - 2021',
      },
      {
        id: 'exp-3',
        title: 'Soldado - Força Aérea Brasileira',
        stage: '2015 - 2017',
      },
    ],
  },
  {
    id: 'education',
    title: 'Formações',
    info: [
      {
        id: 'edu-1',
        title: 'Engenharia de Software - Estácio',
        stage: '2023 - 2024',
      },
      {
        id: 'edu-1',
        title: 'Análise e Desenvolvimento de Sistemas - Estácio',
        stage: '2020 - 2023',
      },
      {
        id: 'edu-2',
        title: 'Técnico em Automação Industrial - FUCAPI',
        stage: '2016 - 2017',
      },
    ],
  },
];

// counter data
const counterData = [
  {
    id: 'experience',
    end: 3,
    text: 'Anos de experiência',
  },
  {
    id: 'projects',
    end: 10,
    text: 'Projetos concluídos',
  },
  {
    id: 'clients',
    end: 300,
    text: 'Clientes satisfeitos',
  },
];

const About = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Histórias <span className='text-accent'>cativantes</span> geram
            designs magníficos.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Há mais de 4 anos, iniciei minha jornada profissional como desenvolvedor.
            Nesse tempo, atuei em diferentes projetos que me permitiram expandir minhas
            habilidades e aprimorar meu conhecimento em diversas áreas da tecnologia.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {counterData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`relative flex-1 ${
                    index < counterData.length - 1 ? 'after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0' : ''
                  }`}
                >
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={item.end} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          {/* Tabs */}
          <div 
            className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'
            role="tablist"
            aria-label="Informações profissionais"
          >
            {aboutData.map((item, itemIndex) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={activeTabIndex === itemIndex}
                aria-controls={`tabpanel-${item.id}`}
                className={`
                  cursor-pointer capitalize xl:text-lg relative 
                  after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
                  transition-all duration-300
                  ${activeTabIndex === itemIndex ? 
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : ''}
                `}
                onClick={() => setActiveTabIndex(itemIndex)}
              >
                {item.title}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          {aboutData.map((tabData, tabIndex) => (
            <div 
              key={tabData.id}
              id={`tabpanel-${tabData.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tabData.id}`}
              className={`py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ${
                activeTabIndex === tabIndex ? 'block' : 'hidden'
              }`}
            >
              {tabData.id === 'skills' ? (
                <div className="w-full h-full flex flex-col items-center">
                  <div className="w-full flex flex-col gap-y-6 mb-4">
                    {tabData.info.map((item) => (
                      <div
                        key={item.id}
                        className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                      >
                        {/* title */}
                        <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                        {item.icons && (
                          <div className='flex gap-x-4'>
                            {/* icons */}
                            {item.icons.map((iconItem) => (
                              <div 
                                key={iconItem.id} 
                                className='text-2xl text-white'
                                title={iconItem.name}
                              >
                                {iconItem.icon}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-[300px] -mt-2">
                    <IconCloudDemo />
                  </div>
                </div>
              ) : (
                tabData.info.map((item) => (
                  <div
                    key={item.id}
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  >
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    {item.stage && (
                      <>
                        <div className='hidden md:flex'>-</div>
                        <div>{item.stage}</div>
                      </>
                    )}
                    {item.icons && (
                      <div className='flex gap-x-4'>
                        {/* icons */}
                        {item.icons.map((iconItem) => (
                          <div 
                            key={iconItem.id} 
                            className='text-2xl text-white'
                            title={iconItem.name}
                          >
                            {iconItem.icon}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;