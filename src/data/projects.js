import { FaJsSquare, FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql } from 'react-icons/si';
import ImgProject2 from '../assets/pr2.png';
import ImgProject3 from '../assets/pr3.png';
import ImgProject5 from '../assets/airport.png';
import ImgProject6 from '../assets/Todo.png';

export const PROJECTS = [
  {
    img: null,
    title: 'Ecommerce Backend',
    shortDesc: 'API REST con autenticacion, productos y pedidos.',
    date: 'Oct 2024',
    desc: 'API REST completa para gestion de ecommerce. Autenticacion y autorizacion con Spring Security, gestion de productos, usuarios y pedidos. Arquitectura en capas con Spring Data JPA y base de datos relacional.',
    link: 'https://github.com/XanthusCode/ecommerce-Backend',
    stack: [
      { Icon: SiSpringboot, color: '#6db33f', label: 'Spring Boot' },
      { Icon: FaJava,       color: '#f89820', label: 'Java' },
      { Icon: SiMysql,      color: '#4479a1', label: 'MySQL' },
      { Icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
    ],
  },
  {
    img: null,
    title: 'Backend Antiguedades',
    shortDesc: 'Backend con Spring Security para gestion de inventario.',
    date: 'Sep 2024',
    desc: 'Backend robusto para gestion de negocio de antiguedades. Spring Boot con Spring Security para autenticacion de usuarios, Spring Data JPA para persistencia y MySQL como base de datos.',
    link: 'https://github.com/XanthusCode/Backend-Antiguedades',
    stack: [
      { Icon: SiSpringboot, color: '#6db33f', label: 'Spring Boot' },
      { Icon: FaJava,       color: '#f89820', label: 'Java' },
      { Icon: SiMysql,      color: '#4479a1', label: 'MySQL' },
    ],
  },
  {
    img: ImgProject3,
    title: 'Movie Search',
    shortDesc: 'Buscador de peliculas con API externa y modal de detalles.',
    date: 'Ago 2024',
    desc: 'Aplicacion React para buscar y explorar peliculas consumiendo una API externa. Busqueda en tiempo real con debounce, vista de detalles en modal y diseno responsivo.',
    link: 'https://github.com/XanthusCode/movie-search',
    stack: [
      { Icon: FaReact,    color: '#61dafb', label: 'React' },
      { Icon: FaJsSquare, color: '#f7df1e', label: 'JavaScript' },
    ],
  },
  {
    img: ImgProject2,
    title: 'Tienda - Carrito',
    shortDesc: 'Carrito de compras en React con notificaciones en tiempo real.',
    date: 'Ago 2024',
    desc: 'Tienda con carrito de compras construida en React. Agregar y eliminar productos con confirmacion, notificaciones visuales al interactuar y manejo de estado con hooks.',
    link: 'https://github.com/XanthusCode/tienda',
    stack: [
      { Icon: FaReact,    color: '#61dafb', label: 'React' },
      { Icon: FaJsSquare, color: '#f7df1e', label: 'JavaScript' },
    ],
  },
  {
    img: ImgProject5,
    title: 'Sistema de Vuelos',
    shortDesc: 'Gestion de vuelos, pasajeros y aeropuertos con Java.',
    date: 'Jun 2024',
    desc: 'Sistema de gestion de vuelos con logica de dominio completa. Manejo de reservas, pasajeros, rutas y aeropuertos. Desarrollado en Java con MySQL como base de datos relacional.',
    link: 'https://github.com/XanthusCode/airport',
    stack: [
      { Icon: FaJava,  color: '#f89820', label: 'Java' },
      { Icon: SiMysql, color: '#4479a1', label: 'MySQL' },
    ],
  },
  {
    img: ImgProject6,
    title: 'TodoApp',
    shortDesc: 'Gestor de tareas CRUD completo con React.',
    date: 'Sep 2024',
    desc: 'Aplicacion de gestion de tareas construida con React. CRUD completo con estado local, marcar tareas completadas y eliminarlas. Interfaz limpia y minimalista.',
    link: 'https://github.com/XanthusCode/TodoApp',
    stack: [
      { Icon: FaReact, color: '#61dafb', label: 'React' },
    ],
  },
];