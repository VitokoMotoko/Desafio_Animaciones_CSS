document.getElementById('burger-icon').addEventListener('click', function() {
var navMenu = document.getElementById('nav-menu');
if (navMenu.classList.contains('nav-visible')) {
    navMenu.classList.remove('nav-visible');
    navMenu.classList.add('nav-hidden');
} else {
    navMenu.classList.remove('nav-hidden');
    navMenu.classList.add('nav-visible');
}
});


// const root = document.querySelector('#root')
// const toggler = document.querySelector('#toggler')

// toggler.addEventListener('click', ()=> {
//     root.classList.toggle('open')
// })