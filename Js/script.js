document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.getElementById('about');
    const portfolioItems = [
        {
            titulo: 'Proyecto 1',
            descripcion: 'Detalles del Proyecto 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imagen: './images/pr1.png',
            url: '#proyecto1' // URL del proyecto 1
        },
        {
            titulo: 'Proyecto 2',
            descripcion: 'Detalles del Proyecto 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imagen: './images/pr2.png',
            url: '#proyecto2' // URL del proyecto 2
        },
        {
            titulo: 'Proyecto 3',
            descripcion: 'Detalles del Proyecto 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imagen: './images/pr3.png',
            url: '#proyecto3' // URL del proyecto 3
        },
        {
            titulo: 'Proyecto 4',
            descripcion: 'Detalles del Proyecto 4. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imagen: './images/pr4.png',
            url: '#proyecto4' // URL del proyecto 4
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
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-1');

        const portfolioTxt = document.createElement('div');
        portfolioTxt.classList.add('portfolio-txt');

        const span = document.createElement('span');
        span.textContent = `Proyecto ${index}`;

        const h3 = document.createElement('h3');
        h3.textContent = 'Pagina Web';

        const p = document.createElement('p');
        p.textContent = item.descripcion;

        const leerMas = document.createElement('a');
        leerMas.href = item.url; // Utilizamos la URL del proyecto
        leerMas.classList.add('btn-1');
        leerMas.textContent = 'Leer Más';
        leerMas.addEventListener('click', (e) => {
            if (window.innerWidth >= 501) {
                // No prevenimos la acción por defecto para que redirija al proyecto
                // Solo prevenimos la acción por defecto en tamaños menores para abrir el modal
            } else {
                e.preventDefault(); // Prevenir la acción por defecto en tamaños menores para abrir el modal
                openModal(`modal-${index}`);
            }
        });

        portfolioTxt.appendChild(span);
        portfolioTxt.appendChild(h3);
        portfolioTxt.appendChild(p);
        portfolioTxt.appendChild(leerMas);

        const portfolioImg = document.createElement('div');
        portfolioImg.classList.add('portfolio-img');

        const img = document.createElement('img');
        img.src = item.imagen;
        img.alt = `Proyecto ${index}`;

        portfolioImg.appendChild(img);

        portfolioItem.appendChild(portfolioTxt);
        portfolioItem.appendChild(portfolioImg);

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
