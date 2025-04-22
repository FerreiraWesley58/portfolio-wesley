// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          id: 1,
          title: 'E-commerce Store',
          path: '/thumb1.jpg',
          description: 'Uma plataforma de comércio eletrônico completa com pagamentos integrados e gerenciamento de inventário.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          demoLink: 'https://store-demo.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/e-commerce-project',
          features: [
            'Sistema de autenticação de usuários',
            'Carrinho de compras persistente',
            'Processamento de pagamentos',
            'Painel de administração'
          ]
        },
        {
          id: 2,
          title: 'App de Gerenciamento de Tarefas',
          path: '/thumb2.jpg',
          description: 'Aplicativo para gerenciamento de projetos e tarefas com recursos de colaboração em equipe.',
          technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
          demoLink: 'https://task-app.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/task-manager',
          features: [
            'Organização de tarefas por projetos',
            'Sistema de notificações',
            'Colaboração em tempo real',
            'Visualização Kanban'
          ]
        },
        {
          id: 3,
          title: 'Blog Tech',
          path: '/thumb3.jpg',
          description: 'Plataforma de blog com sistema de gerenciamento de conteúdo personalizado.',
          technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
          demoLink: 'https://tech-blog.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/tech-blog',
          features: [
            'Editor de texto rico',
            'Categorização de artigos',
            'Sistema de comentários',
            'Analytics integrado'
          ]
        },
        {
          id: 4,
          title: 'Dashboard Financeiro',
          path: '/thumb4.jpg',
          description: 'Dashboard para visualização e análise de dados financeiros com gráficos interativos.',
          technologies: ['React', 'D3.js', 'Express', 'MySQL'],
          demoLink: 'https://finance-dashboard.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/finance-dashboard',
          features: [
            'Visualização de dados em tempo real',
            'Relatórios personalizados',
            'Projeções financeiras',
            'Exportação de dados'
          ]
        },
      ],
    },
    {
      images: [
        {
          id: 5,
          title: 'App de Fitness',
          path: '/thumb4.jpg',
          description: 'Aplicativo para acompanhamento de atividades físicas, nutrição e saúde geral.',
          technologies: ['React Native', 'Redux', 'Firebase'],
          demoLink: 'https://fitness-app.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/fitness-app',
          features: [
            'Registro de atividades físicas',
            'Planejamento de refeições',
            'Monitoramento de progresso',
            'Integrações com dispositivos wearable'
          ]
        },
        {
          id: 6,
          title: 'Portfolio Criativo',
          path: '/thumb1.jpg',
          description: 'Portfolio para designers e criativos com galeria de projetos e funcionalidades avançadas.',
          technologies: ['Gatsby', 'Styled Components', 'Netlify CMS'],
          demoLink: 'https://portfolio-criativo.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/portfolio-criativo',
          features: [
            'Galeria de projetos',
            'Blog integrado',
            'Formulário de contato',
            'Integração com redes sociais'
          ]
        },
        {
          id: 7,
          title: 'Plataforma de Ensino',
          path: '/thumb2.jpg',
          description: 'LMS (Learning Management System) para cursos online com recursos para professores e alunos.',
          technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
          demoLink: 'https://learning-platform.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/learning-platform',
          features: [
            'Gestão de cursos e aulas',
            'Fórum de discussão',
            'Avaliações e questionários',
            'Certificados automatizados'
          ]
        },
        {
          id: 8,
          title: 'App de Reservas',
          path: '/thumb3.jpg',
          description: 'Sistema de reservas para restaurantes com gestão de mesas e clientes.',
          technologies: ['React', 'Express', 'PostgreSQL', 'WebSockets'],
          demoLink: 'https://reservas-app.exemplo.com',
          githubLink: 'https://github.com/seu-usuario/reservas-app',
          features: [
            'Reservas em tempo real',
            'Sistema de notificações',
            'Painel administrativo',
            'Histórico de clientes'
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

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
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
                    <span 
                      key={index} 
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conteúdo em Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Imagem do Projeto */}
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src={selectedProject.path} 
                    width={600} 
                    height={400} 
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Detalhes do Projeto */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Descrição</h3>
                    <p className="text-gray-400">{selectedProject.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Recursos</h3>
                    <ul className="list-disc pl-5 text-gray-400">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <BsGlobe /> Demo ao Vivo
                    </a>
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <BsGithub /> Ver Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;