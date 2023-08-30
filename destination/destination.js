const drpdwn = document.querySelector('.burgir');
const menu = document.querySelector('nav-right');
drpdwn.addEventListener("click", function () {
    drpdwn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});


//luzon slideshow
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

//buttons
const buttons = document.querySelectorAll('[data-button-target]')
const buttonContents = document.querySelectorAll('[data-button-content]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetbutton = document.querySelector(button.dataset.buttonTarget)
        buttonContents.forEach(buttonContent => {
            buttonContent.classList.remove('active')
        })
        buttons.forEach(button => {
            button.classList.remove('active')
        })
        
        tabContents.forEach(tabContent => {
            tabContent.classList.add('active')
        })
        button.classList.add('active')
        targetbutton.classList.add('active')
        
    })
})


//options
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})
