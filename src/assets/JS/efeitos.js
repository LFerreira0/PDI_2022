const btnMobile = document.getElementById('btn-mobile');

function toogleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
