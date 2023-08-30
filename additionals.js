const drpdwn = document.querySelector('.burgir');
const menu = document.querySelector('nav-right');
drpdwn.addEventListener("click", function () {
    drpdwn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

