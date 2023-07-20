"use strict";
const menuItem = document.querySelector('.nav-items');
const menuIcon = document.querySelector('.menu-icon');


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
