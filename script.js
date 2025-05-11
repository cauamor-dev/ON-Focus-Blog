/**
 * Sistema de Tema
 * Gerencia a alternância entre tema claro e escuro
 */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de tema
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const html = document.documentElement;
    
    // Recupera o tema salvo ou usa 'dark' como padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    // Atualiza os ícones dos botões de tema
    updateThemeIcons(savedTheme);
    
    // Adiciona evento de clique para cada botão de tema
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons(newTheme);
        });
    });
    
    // Função para atualizar os ícones de acordo com o tema
    function updateThemeIcons(theme) {
        const darkIcons = document.querySelectorAll('.theme-toggle-dark');
        const lightIcons = document.querySelectorAll('.theme-toggle-light');
        
        if (theme === 'dark') {
            darkIcons.forEach(icon => icon.style.display = 'block');
            lightIcons.forEach(icon => icon.style.display = 'none');
        } else {
            darkIcons.forEach(icon => icon.style.display = 'none');
            lightIcons.forEach(icon => icon.style.display = 'block');
        }
    }
});

/**
 * Botão Voltar ao Topo
 * Controla a visibilidade e funcionalidade do botão
 */
const backToTopButton = document.querySelector('.back-to-top');

// Mostra/oculta o botão baseado na posição da rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Rola suavemente para o topo ao clicar
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/**
 * Sistema de Carregamento de Notícias
 * Simula o carregamento de mais notícias
 */
const loadMoreButton = document.querySelector('.load-more-btn');
const newsGrid = document.querySelector('.news-grid');

loadMoreButton.addEventListener('click', () => {
    loadMoreButton.classList.add('loading');
    
    // Simula o carregamento de mais notícias (aqui você adicionaria a lógica real)
    setTimeout(() => {
        loadMoreButton.classList.remove('loading');
    }, 1000);
});

/**
 * Menu Mobile
 * Gerencia a funcionalidade do menu mobile e overlay
 */
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const aside = document.querySelector('aside');
const menuOverlay = document.querySelector('.menu-overlay');

// Função para alternar o estado do menu mobile
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    aside.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = aside.classList.contains('active') ? 'hidden' : '';
}

// Event Listeners para o menu mobile
mobileMenuToggle.addEventListener('click', toggleMobileMenu);
menuOverlay.addEventListener('click', toggleMobileMenu);

// Fecha o menu ao clicar em um link
const menuLinks = document.querySelectorAll('aside a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });
});

// Fecha o menu ao redimensionar a janela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenuToggle.classList.remove('active');
        aside.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

/**
 * Modal de Busca
 * Controla a funcionalidade do modal de busca
 */
const searchToggle = document.querySelector('.search-toggle');
const searchModal = document.querySelector('.search-modal');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.querySelector('.search-modal input');

// Função para alternar o estado do modal de busca
function toggleSearchModal() {
    searchModal.classList.toggle('active');
    if (searchModal.classList.contains('active')) {
        searchInput.focus();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Event Listeners para o modal de busca
searchToggle.addEventListener('click', toggleSearchModal);
closeSearch.addEventListener('click', toggleSearchModal);

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        toggleSearchModal();
    }
});

/**
 * Newsletter - Mensagem de sucesso ao inscrever
 */
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterContent = document.querySelector('.newsletter-content');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Mensagem de sucesso
        newsletterContent.innerHTML = `
            <h2>Fique por dentro!</h2>
            <p>Inscrição realizada com sucesso! Você receberá novidades no seu e-mail.</p>
        `;
    });
}
