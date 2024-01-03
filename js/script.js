
var swiper = new Swiper(".myswiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
  pagination: {
    el:".swiper-pagination",
  },
  mouseshell: true,
  keyboard: true,
});
document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('nav__active');
  document.querySelector('.header').classList.toggle('header__active');
});
