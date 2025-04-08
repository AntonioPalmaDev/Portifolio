const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const links = menu.querySelectorAll('a');
const toggleTema = document.getElementById('toggleTema');
const logo = document.getElementById('logo');
const icone = toggleTema.querySelector('.icone');


function trocarLogo(tema) {
  if (tema === 'light') {
    logo.src = 'img/logo_branca2.png'; 
  } else {
    logo.src = 'img/logo_preta3.png';
  }
}


hamburguer.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});


links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});


toggleTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');

 
  toggleTema.classList.add('trocando');

 
  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';

  
  icone.textContent = temaAtual === 'dark' ? '🌙' : '☀️';


  trocarLogo(temaAtual);


  setTimeout(() => {
    toggleTema.classList.remove('trocando');
  }, 300);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      } else {
        entry.target.classList.remove('ativo'); // remove quando sai da tela
      }
    });
  });
  
  const elementos = document.querySelectorAll('.reveal');
  elementos.forEach(el => observer.observe(el));
  
  const btn = document.getElementById("scrollTopBtn");

  
  window.onscroll = function () {
    if (window.scrollY > 0) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });