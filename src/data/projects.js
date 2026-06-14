import { FaJsSquare, FaJava, FaReact, FaVuejs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiDotnet } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import ImgProject1 from '../assets/pr1.png';
import ImgProject3 from '../assets/pr3.png';
import ImgProject4 from '../assets/pr4.png';
import ImgProject6 from '../assets/Todo.png';

export const PROJECTS = [
  {
    id: 'movie-search',
    img: ImgProject3,
    title: 'Movie Search',
    shortDesc: 'SPA with real-time search, debouncing and external API integration.',
    date: 'Aug 2024',
    desc: 'React single-page application for browsing and discovering movies. Debounced real-time search to reduce unnecessary API calls, detail view in a modal overlay, and a clean responsive layout. Demonstrates practical use of custom hooks and async data fetching patterns.',
    link: 'https://github.com/XanthusCode/movie-search',
    stack: [
      { Icon: FaReact,    color: '#61dafb', label: 'React' },
      { Icon: FaJsSquare, color: '#f7df1e', label: 'JavaScript' },
    ],
  },
  {
    id: 'tienda-carrito',
    img: null,
    title: 'Shopping Cart',
    shortDesc: 'React storefront with real-time cart state and visual notifications.',
    date: 'Aug 2024',
    desc: 'E-commerce storefront built with React featuring a fully functional shopping cart. Add and remove products with visual confirmation feedback, real-time cart count updates, and state management using hooks without external libraries.',
    link: 'https://github.com/XanthusCode/tienda',
    stack: [
      { Icon: FaReact,    color: '#61dafb', label: 'React' },
      { Icon: FaJsSquare, color: '#f7df1e', label: 'JavaScript' },
    ],
  },
  {
    id: 'betplay',
    img: null,
    title: 'BetPlay Platform',
    shortDesc: 'Sports betting platform with match management, odds and bet history.',
    date: 'Jun 2024',
    desc: 'Full-featured sports betting platform built with Java and Spring Boot. Handles user registration and authentication, match and event management, dynamic odds, bet placement and validation, and full betting history per user. Demonstrates complex domain modeling and business rule enforcement in a layered Spring architecture.',
    link: 'https://github.com/XanthusCode/betPlay2.0',
    stack: [
      { Icon: SiSpringboot, color: '#6db33f', label: 'Spring Boot' },
      { Icon: FaJava,       color: '#f89820', label: 'Java' },
      { Icon: SiMysql,      color: '#4479a1', label: 'MySQL' },
    ],
  },
  {
    id: 'todo-app',
    img: ImgProject6,
    title: 'TodoApp',
    shortDesc: 'Full CRUD task manager with clean minimal interface in React.',
    date: 'Sep 2024',
    desc: 'Task management app built with React. Complete CRUD operations using local state, mark tasks as completed, delete and filter tasks. Focused on clean component structure and minimal UI — a baseline for demonstrating React fundamentals.',
    link: 'https://github.com/XanthusCode/TodoApp',
    stack: [
      { Icon: FaReact, color: '#61dafb', label: 'React' },
    ],
  },
  {
    id: 'finanzas-app',
    img: null,
    title: 'Personal Finance App',
    shortDesc: 'Full-stack finance tracker with budgets, goals and recurring transactions.',
    date: '2026',
    desc: 'Full-stack personal finance manager. Organize income and expenses by category, define budgets and savings goals, and mark transactions as recurring so they carry over automatically to the next month. Dashboard shows cumulative savings across all months at a glance. Built with Vue on the frontend, .NET on the backend, and PostgreSQL as the relational database.',
    link: 'https://github.com/XanthusCode/Finanzas_App',
    stack: [
      { Icon: FaVuejs,      color: '#42b883', label: 'Vue' },
      { Icon: SiDotnet,     color: '#512bd4', label: '.NET' },
      { Icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
    ],
  },
  {
    id: 'foods-website',
    img: ImgProject1,
    title: 'Foods Website',
    shortDesc: 'Responsive food restaurant landing page with menu and contact sections.',
    date: '2024',
    desc: 'Full responsive landing page for a food restaurant. Includes hero section, navigation, menu showcase, services and contact. Built with semantic HTML and CSS — focused on clean layout, visual hierarchy and responsive design across screen sizes.',
    link: 'https://github.com/XanthusCode/Foods',
    stack: [
      { Icon: FaHtml5,   color: '#e34f26', label: 'HTML5' },
      { Icon: FaCss3Alt, color: '#1572b6', label: 'CSS3' },
    ],
  },
  {
    id: 'memories-game',
    img: ImgProject4,
    title: 'Memory Game',
    shortDesc: 'Browser memory card game with timer, hit counter and move tracking.',
    date: '2024',
    desc: 'Classic memory card game built with vanilla JavaScript. Players flip cards to find matching pairs under a 30-second countdown. Tracks hits, total moves, and elapsed time to score the session. Demonstrates DOM manipulation, game state management and timer logic without any framework.',
    link: 'https://github.com/XanthusCode/MemoriesGame',
    stack: [
      { Icon: FaJsSquare, color: '#f7df1e', label: 'JavaScript' },
      { Icon: FaHtml5,    color: '#e34f26', label: 'HTML5' },
    ],
  },
  {
    id: 'code-review-ai',
    img: null,
    title: 'Code Review AI',
    shortDesc: 'AI-powered code analyzer for security, performance and best practices.',
    date: '2026',
    desc: 'Tool that uses AI to perform targeted code reviews. Paste any code snippet and choose the analysis focus: security vulnerabilities, performance bottlenecks, readability issues, or best practices compliance. Each mode returns specific, actionable feedback powered by an AI model. Built with Vue on the frontend.',
    link: 'https://github.com/XanthusCode/code-review-ai',
    stack: [
      { Icon: FaVuejs, color: '#42b883', label: 'Vue' },
      { Icon: TbBrain, color: '#a78bfa', label: 'AI' },
    ],
  },
];
