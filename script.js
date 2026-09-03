/* ============================================
   DADOS DOS PROJETOS
   ============================================
   Edite aqui para adicionar, remover ou alterar projetos.

   Campos de cada projeto:
   - id: número único
   - title: título do projeto
   - date: data/mês do projeto
   - shortDesc: descrição curta (aparece no card)
   - fullDesc: descrição completa (aparece no modal)
   - image: URL da imagem de capa
   - gallery: array de URLs das imagens do modal
   - codeUrl: link do GitHub (use null para ocultar o botão)
   ============================================ */
const projects = [
  {
    id: 4,
    title: "Fortuna-Servicos",
    date: "Agosto 2026",
    shortDesc: "O Fortuna Serviços é uma plataforma voltada à terceirização de serviços residenciais e domésticos, com o objetivo de facilitar a localização e contratação de prestadores de serviços.",
    fullDesc: "O Fortuna Serviços é uma plataforma web que conecta clientes a prestadores de serviços residenciais e domésticos. A aplicação permite que os usuários busquem profissionais qualificados em diversas categorias, visualizem avaliações e comentários de outros clientes, e agendem serviços diretamente pela plataforma. O sistema inclui funcionalidades de pagamento seguro, notificações em tempo real, e um painel administrativo para gerenciar solicitações e perfis de prestadores. Desenvolvido com foco em UX/UI, o projeto prioriza a simplicidade e eficiência na experiência do usuário.",
    image: "https://i.im.ge/QQQmto9/image.png",
    gallery: [
      "https://i.im.ge/QQQmto9/image.png",
      "https://i.im.ge/QQQmyhX/image.png",
      "https://i.im.ge/QQQmAY8/image.png"
    ],
    codeUrl: "https://github.com/wagnersantosdgn/Fortuna-Servicos"
  },
    {
    id: 3,
    title: "Controle Financeiro",
    date: "Maio 2026",
    shortDesc: "Power bi Dashboard de controle financeiro pessoal, com gráficos e indicadores de despesas, receitas e saldo.",
    fullDesc: "Dashboard de controle financeiro pessoal desenvolvido no Power BI, com gráficos e indicadores de despesas, receitas e saldo. O painel permite que o usuário visualize suas finanças de forma clara e objetiva, facilitando a tomada de decisões financeiras. Inclui filtros interativos para análise detalhada por categoria, período e tipo de transação.",
    image: "https://i.im.ge/QQQmgmC/image.png",
    gallery: [
      "https://i.im.ge/QQQmgmC/image.png",
      "https://i.im.ge/QQQmcO4/image.png",
      "https://i.im.ge/QQQmYHD/image.png"
    ],
    codeUrl: null
  },
  {
    id: 2,
    title: "Grau Center - Xingu Data",
    date: "Maio 2026",
    shortDesc: "Projeto acadêmico desenvolvido como trabalho interdisciplinar com foco na análise estratégica da implantação de um data center sustentável em região semiárida, considerando fatores tecnológicos, econômicos, ambientais e logísticos.",
    fullDesc: "Na disciplina Segurança, Meio Ambiente e Saúde, tive o desafio de projetar a infraestrutura de TI para um cenário de alta complexidade: uma reserva indígena onde o meu grupo escolheu foi em Alto Solimões. O resultado foi o Xingu Data, um projeto da nossa empresa fictícia Grau Center que prova que a tecnologia de ponta pode (e deve) coexistir com a preservação ambiental. Construímos um projeto 3D (Coohom), site (Github), slides (Canva) e vídeo (Youtube).",
    image: "https://i.im.ge/QQQq0hC/image.png",
    gallery: [
      "https://i.im.ge/QQQq0hC/image.png",
      "https://i.im.ge/QQQq9Bp/image.png",
      "https://i.im.ge/QQQq5bq/image.png"
    ],
    codeUrl: "https://github.com/heenriqsoares/XinguData"
  },
  {
    id: 1,
    title: "Dashboard BrasilCEP",
    date: "Março 2026",
    shortDesc: "BrasilCEP — Painel local para consultas de CEP.",
    fullDesc: "Dashboard para consulta de CEPs brasileiros, desenvolvido com foco em performance e usabilidade. O painel permite busca rápida por CEP, exibição de informações detalhadas do endereço e integração com APIs de geolocalização. A interface é intuitiva e responsiva, proporcionando uma experiência consistente em diferentes dispositivos.",
    image: "https://i.im.ge/QQQqSYK/image.png",
    gallery: [
      "https://i.im.ge/QQQqSYK/image.png",
      "https://i.im.ge/QQQqay8/image.png"
    ],
    codeUrl: "https://github.com/wagnersantosdgn/Dashboard-BrasilCEP"
  }
];

/* ============================================
   ELEMENTOS DO DOM
   ============================================ */
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalGallery = document.getElementById('modalGallery');
const modalDesc = document.getElementById('modalDesc');
const modalLinks = document.getElementById('modalLinks');
const navLinks = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

/* ============================================
   RENDERIZAR PROJETOS
   ============================================ */
function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map(project => {
    const codeButton = project.codeUrl
      ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Ver Código</a>`
      : '';

    return `
      <article class="project-card">
        <img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-body">
          <div class="project-date">${project.date}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
          <button class="project-desc-toggle" type="button" aria-expanded="false" hidden>Ver mais</button>
          <div class="project-actions">
            ${codeButton}
            <button class="btn btn-primary" onclick="openProjectModal(${project.id})" type="button">
              Ver Página
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    const description = card.querySelector('.project-desc');
    const toggle = card.querySelector('.project-desc-toggle');

    if (description.scrollHeight > description.clientHeight) {
      description.classList.add('has-toggle');
      toggle.hidden = false;
    }
  });
}

projectsGrid?.addEventListener('click', (event) => {
  const toggle = event.target.closest('.project-desc-toggle');
  if (!toggle) return;

  const description = toggle.previousElementSibling;
  const expanded = description.classList.toggle('expanded');

  toggle.textContent = expanded ? 'Ver menos' : 'Ver mais';
  toggle.setAttribute('aria-expanded', String(expanded));
});

/* ============================================
   MODAL DE DETALHES DO PROJETO
   ============================================ */
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  // Preencher conteúdo
  modalTitle.textContent = project.title;
  modalDate.textContent = project.date;
  modalDesc.textContent = project.fullDesc;

  // Galeria de imagens
  modalGallery.innerHTML = project.gallery
    .map(img => `<img src="${img}" alt="${project.title}" loading="lazy">`)
    .join('');

  // Links de ação
  const links = [];
  if (project.codeUrl) {
    links.push(`<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Ver Código no GitHub</a>`);
  }
  links.push(`<button class="btn btn-primary" onclick="closeProjectModal()" type="button">Voltar aos Projetos</button>`);
  modalLinks.innerHTML = links.join('');

  // Abrir modal
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Fechar modal ao clicar no overlay
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

// Fechar modal ao clicar no botão X
modalClose.addEventListener('click', closeProjectModal);

// Fechar modal com a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeProjectModal();
  }
});

/* ============================================
   MENU MOBILE
   ============================================ */
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

/* ============================================
   NAVEGAÇÃO ATIVA AO ROLAR
   ============================================ */
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

function setActiveNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Efeito de sombra na navbar ao rolar
function handleNavbarScroll() {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', () => {
  setActiveNav();
  handleNavbarScroll();
});

/* ============================================
   ANIMAÇÃO DE ENTRADA AO ROLAR (REVEAL)
   ============================================ */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Adicionar classe de animação aos elementos
function initRevealAnimations() {
  const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .about-text, .contact-info, .contact-form'
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    el.classList.add('reveal-item');
    revealObserver.observe(el);
  });
}

// Classe CSS adicionada via JS para elementos visíveis
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal-item.revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(revealStyle);

/* ============================================
   FORMULÁRIO DE CONTATO (SIMULAÇÃO)
   ============================================ */
// const btnEnviar = document.getElementById('btnEnviar');
// if (btnEnviar) {
//   btnEnviar.addEventListener('click', (e) => {
//     e.preventDefault();
//     const nome = document.getElementById('nome').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mensagem = document.getElementById('mensagem').value.trim();

//     if (!nome || !email || !mensagem) {
//       alert('Por favor, preencha todos os campos.');
//       return;
//     }

//     // Simulação de envio
//     btnEnviar.textContent = 'Enviando...';
//     btnEnviar.disabled = true;

//     setTimeout(() => {
//       alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
//       document.getElementById('nome').value = '';
//       document.getElementById('email').value = '';
//       document.getElementById('mensagem').value = '';
//       btnEnviar.textContent = 'Enviar Mensagem';
//       btnEnviar.disabled = false;
//     }, 1500);
//   });
// }

/* ============================================
   INICIALIZAÇÃO
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setActiveNav();
  initRevealAnimations();
});
