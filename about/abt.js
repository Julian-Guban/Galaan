const drpdwn = document.querySelector('.burgir');
const menu = document.querySelector('nav-right');
drpdwn.addEventListener("click", function () {
    drpdwn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

const dropdwn = document.querySelector('.burgir1');
const roles = document.querySelector('.roles');
dropdwn.addEventListener("click", function () {
    dropdwn.classList.toggle('is-active1');
    roles.classList.toggle('is-active1');
});

roles.addEventListener("click", function () {
    dropdwn.classList.remove('is-active1');
    roles.classList.remove('is-active1');
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targettab = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        targettab.classList.add('active')
    })
})