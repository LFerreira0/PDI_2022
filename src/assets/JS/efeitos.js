const btnMobile = document.getElementById('btn-mobile');


function toogleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

function typeWriter(elemento){
  const titulo = document.getElementById('hero-titulo');

  const textoArray = titulo.innerHTML.split("");
  titulo.innerHTML = '';


  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      titulo.innerHTML += letra;
    }, 75 * i)
  });

}

btnMobile.addEventListener('click', toogleMenu);
