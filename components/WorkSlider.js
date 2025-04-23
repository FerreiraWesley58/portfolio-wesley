// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          id: 1,
          title: 'Gerador de QR CODE',
          path: '/thumb1.jpg',
          description: 'Um aplicativo Python para gerar QR Codes personalizados para dízimos e ofertas, com opções de personalização e geração em lote.',
          technologies: ['Python', 'qrcode', 'Pillow', 'Tkinter'],
          demoLink: 'https://igreja-main.onrender.com',
          githubLink: 'https://github.com/FerreiraWesley58/igreja-main',
          videoPath: '/videos/qr-code-demo.mp4',
          features: [
            'Geração de QR Codes personalizados',
            'Suporte para dízimos e ofertas',
            'Interface gráfica amigável',
            'Opções de personalização de cores e tamanho',
            'Geração em lote para múltiplos valores'
          ]
        },
        {
          id: 2,
          title: 'Assistente Virtual Empresarial',
          path: '/thumb2.jpg',
          description: 'Um assistente virtual que sabe tudo da empresa',
          technologies: ['Python', 'Streamlit',],
          demoLink: '#',
          videoPath: '/videos/task-manager-demo.mp4',
          githubLink: 'https://github.com/seu-usuario/task-manager',
          features: [
            'Perguntas e Respostas',
            'Aprendizado com RAG',
            'Colaboração em tempo real',
          ]
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight, BsX, BsGithub, BsGlobe } from 'react-icons/bs';
// next image
import Image from 'next/image';
import { useState } from 'react';

const WorkSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setShowVideo(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setShowVideo(false);
  };

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                {slide.images.map((image, index) => {
                  return (
                    <div
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      key={index}
                      onClick={() => openProjectDetails(image)}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group cursor-pointer'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt={image.title} />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>VER</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJETO
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modal do Projeto */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-[#1d1836] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-accent transition-colors"
              onClick={closeModal}
            >
              <BsX />
            </button>

            <div className="p-6 md:p-8">
              {/* Cabeçalho */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                  <span className="text-accent">.</span>
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vídeo ou Imagem */}
              {selectedProject.videoPath ? (
                <div className="mb-6">
                  <video 
                    className="w-full rounded-lg" 
                    controls
                    autoPlay
                    muted
                  >
                    <source src={selectedProject.videoPath} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              ) : (
                <div className="mb-6">
                  <Image 
                    src={selectedProject.path} 
                    width={800} 
                    height={450} 
                    alt={selectedProject.title}
                    className="rounded-lg"
                  />
                </div>
              )}

              {/* Descrição */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Descrição</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Funcionalidades</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <BsGithub /> Código
                  </a>
                )}
                {selectedProject.demoLink && selectedProject.demoLink !== '#' && (
                  <a 
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <BsGlobe /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;