document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.getElementById('about');
    const portfolioItems = [
        {
            titulo: 'Foods',
            descripcion: ' Es un sitio web diseñado para promocionar un restaurante o servicio de alimentos. Proporciona información sobre el restaurante, su menú, servicios, información de contacto y enlaces relevantes. El diseño es moderno y receptivo, adaptándose bien a diferentes tamaños de pantalla.',
            imagen: './images/pr1.png',
            url: 'https://github.com/Jagc-1/Foods' 
        },
        {
            titulo: 'Inventario',
            descripcion: 'es una página web diseñada para gestionar activos, marcas, personas, estados, tipos de personas, tipos de movimientos de activos, tipos de activos y asignaciones. La página web proporciona funcionalidades para realizar diversas operaciones como agregar, editar, eliminar y buscar diferentes entidades.',
            imagen: './images/pr2.png',
            url: 'https://github.com/Jagc-1/Inventario-proyecto'
        },
        {
            titulo: 'Comic Web',
            descripcion: 'es un proyecto web desarrollado con JavaScript, HTML y CSS que ofrece una experiencia inmersiva en el mundo de los personajes de Marvel y DC Comics. La plataforma presenta una interfaz interactiva donde los aficionados pueden explorar una amplia variedad de héroes y villanos de estos dos universos icónicos.',
            imagen: './images/pr3.png',
            url: 'https://github.com/Jagc-1/comicWeb' // URL del proyecto 3
        },
        {
            titulo: ' MemoriesGame',
            descripcion: 'Des un divertido juego interactivo desarrollado utilizando HTML, CSS y JavaScript. Este juego pone a prueba tu memoria a través de un entretenido desafío visual y auditivo, diseñado para jugadores de todas las edades.',
            imagen: './images/pr4.png',
            url: 'https://github.com/Jagc-1/MemoriesGame' // URL del proyecto 4
        }
    ];
    const modalsContainer = document.getElementById('modals');

    // Generar contenido del About
    const aboutContent = `
        <div class="about-img">
            <img src="./images/perfil.jpg" alt="Perfil">
        </div>
        <div class="about-txt">
            <h2>Sobre Mi</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eius est quae ad sed, nobis dolores exercitationem dolore optio mollitia
                vitae asperiores, ut pariatur?
                Doloremque quae natus accusamus. Nisi, nesciunt consequatur.

                <br><br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae ab dolorem suscipit quod voluptate ea optio numquam
                officia alias debitis hic maxime nobis tenetur
                consequatur, distinctio minus aliquam! Sequi, error.
            </p>
            <div class="buttons">
                <a href="#portfolio" class="btn-1">Portfolio</a>
                <a href="#skills" class="btn-1">Tecnologías</a>
            </div>
        </div>
    `;
    aboutContainer.innerHTML = aboutContent;

        // Generar contenido dinámico del Portfolio
        const portfolioContainer = document.getElementById('portfolioItems');
        portfolioItems.forEach((item, index) => {
            const portfolioItem = createPortfolioItem(item, index + 1);
            portfolioContainer.appendChild(portfolioItem);
        });
    
        function createPortfolioItem(item, index) {
            // Crear contenedor principal del item del portfolio
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
        
            // Contenedor para el texto del portfolio
            const portfolioText = document.createElement('div');
            portfolioText.classList.add('portfolio-text');
        
            // Título del proyecto
            const h3 = document.createElement('h3');
            h3.textContent = item.titulo;
        
            // Imagen del proyecto
            const img = document.createElement('img');
            img.src = item.imagen;
            portfolioText.appendChild(img); // Añadir la imagen antes del título
        
        
            // Descripción del proyecto
            const p = document.createElement('p');
            p.textContent = item.descripcion;


        
           
        
            const leerMas = document.createElement('a');
            leerMas.href = item.url; // Utilizamos la URL del proyecto
            leerMas.classList.add('btn-1');
            leerMas.textContent = 'Leer Más';
            leerMas.addEventListener('click', (e) => {
                if (window.innerWidth >= 501) {
                } else {
                    e.preventDefault(); // Prevenir la acción por defecto en tamaños menores para abrir el modal
                    openModal(`modal-${index}`);
                }
            });
        
            // Añadir elementos de texto al contenedor de texto del portfolio
            portfolioText.appendChild(h3);
            portfolioText.appendChild(p);
            portfolioText.appendChild(leerMas);
        
            // Añadir contenedor de texto al contenedor principal del item del portfolio
            portfolioItem.appendChild(portfolioText);
        
            return portfolioItem;
        }

    function openModal(modalId) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = modalId;

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeModal = document.createElement('span');
        closeModal.className = 'close';
        closeModal.textContent = '×';
        closeModal.addEventListener('click', closeModalHandler);

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = portfolioItems[parseInt(modalId.slice(-1)) - 1].titulo;

        const modalDescription = document.createElement('p');
        modalDescription.textContent = portfolioItems[parseInt(modalId.slice(-1)) - 1].descripcion;

        modalContent.appendChild(closeModal);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalDescription);
        modal.appendChild(modalContent);

        modalsContainer.appendChild(modal);

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evita que se haga scroll en el fondo

        function closeModalHandler() {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restaura el scroll en el fondo
            modal.remove();
        }
    }
});
