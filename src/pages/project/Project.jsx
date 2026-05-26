import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/projectCard';
import ImgProject1 from '../../assets/pr1.png';
import ImgProject2 from '../../assets/pr2.png';
import ImgProject3 from '../../assets/pr3.png';
import ImgProject4 from '../../assets/pr4.png';
import ImgProject5 from '../../assets/airport.png';
import ImgProject6 from '../../assets/Todo.png';

const PROJECTS = [
  {
    img: ImgProject1,
    title: 'Foods',
    date: 'Campuslands — Enero 2024',
    desc: 'Sitio web disenado para promocionar un restaurante o servicio de alimentos.',
    link: 'https://github.com/XanthusCode/Foods',
  },
  {
    img: ImgProject3,
    title: 'Comic Web',
    date: 'Campuslands — Febrero 2024',
    desc: 'Experiencia inmersiva en el mundo de los personajes de Marvel y DC Comics. Desarrollado con JavaScript, HTML y CSS.',
    link: 'https://github.com/XanthusCode/comicWeb',
  },
  {
    img: ImgProject2,
    title: 'Inventario',
    date: 'Campuslands — Marzo 2024',
    desc: 'Pagina web para gestionar activos, marcas, personas, estados y asignaciones.',
    link: 'https://github.com/XanthusCode/Inventario-proyecto',
  },
  {
    img: ImgProject4,
    title: 'Memorie Game',
    date: 'Diciembre 2023',
    desc: 'Juego interactivo de memoria desarrollado con HTML, CSS y JavaScript.',
    link: 'https://github.com/XanthusCode/MemoriesGame',
  },
  {
    img: ImgProject5,
    title: 'Sistema de Gestion de Vuelos',
    date: 'Campuslands — Junio 2024',
    desc: 'Sistema de gestion de vuelos desarrollado con Java y MySQL.',
    link: 'https://github.com/XanthusCode/airport',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg',
    title: 'Formulario de Registro',
    date: 'Campuslands — Julio 2024',
    desc: 'Formulario de contacto y tabla dinamica de usuarios con Spring Boot y Thymeleaf.',
    link: 'https://github.com/XanthusCode/FomularioRegistro',
  },
  {
    img: ImgProject6,
    title: 'TodoApp',
    date: 'Septiembre 2024',
    desc: 'Aplicacion de gestion de tareas construida con React. Agregar, eliminar y marcar tareas como completadas.',
    link: 'https://github.com/XanthusCode/TodoApp',
  },
];

const Project = () => (
  <div style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
    <Layout className="py-20 space-y-12">
      <div className="space-y-3">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Proyectos
        </h1>
        <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          Haz clic en cada tarjeta para ver descripcion y enlace al repositorio.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Layout>
  </div>
);

export default Project;