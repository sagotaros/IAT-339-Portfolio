"use strict";
const menuItem = document.querySelector('.nav-items');
const menuIcon = document.querySelector('.menu-icon');
const stars = document.querySelectorAll('.ratings-click i');

//https://www.youtube.com/watch?v=q1xhbc-oKnc Watched this tutorial for the stars

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    })    
    });
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

function reviewAlert(){
    alert("Thank you for the review!");
}

function checkoutAlert(){
    alert("Thank you for the purchase!");
}
