"use strict";
const menuItem = document.querySelector('.nav-items');
const menuIcon = document.querySelector('.menu-icon');
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});



menuIcon.addEventListener('click',() => {
    const visiblity = menuItem.getAttribute('data-visible')

    if (visiblity === "false"){
        menuItem.setAttribute('data-visible', true)
        menuIcon.setAttribute('aria-expanded', true)
    } else {
        menuItem.setAttribute('data-visible', false)
        menuIcon.setAttribute('aria-expanded', false)
    }
});
