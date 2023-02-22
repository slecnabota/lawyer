const arrowBurger = document.querySelector('.header__menu');
const bodyBurger = document.querySelector('.header__mobile');
const logoBurger = document.querySelector('.header-wrapper');
const link = document.querySelector('.close');
const link2 = document.querySelector('.close2');
const link3 = document.querySelector('.close3');
arrowBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
});
link.addEventListener('click', closeLink)
link2.addEventListener('click', closeLink)
link3.addEventListener('click', closeLink)
function closeLink(){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
}