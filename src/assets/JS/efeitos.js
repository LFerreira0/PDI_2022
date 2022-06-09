const btnMobile = document.getElementById('btn-mobile');

function efeitos(){
  const sobre = document.querySelector('#sobre');
  const faders = document.querySelectorAll('.fade-in');
  const sliders = document.querySelectorAll('.slide-in')
  const options = {
      root: null,
      threshold: 0,
      rootMargin: "-150px"
   };
   const appearOptions = {
     threshold: 0,
     rootMargin: "0px 0px -350px 0px"
   };
  const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
      console.log(entry);
    })
  }, options);

  observer.observe(sobre);

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions)

  faders.forEach(fader =>{
    appearOnScroll.observe(fader);
  })

  sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
  })

}

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
