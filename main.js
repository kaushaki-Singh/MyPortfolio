/*============================= Toggle Icon navbar ==============================*/

let menuIcon=document.querySelector("#menu-icon");
let navBar=document.querySelector(".navbar");
menuIcon.onclick=function(){
   menuIcon.classList.toggle("fa-xmark")
    navBar.classList.toggle("active");
}

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});


ScrollReveal().reveal('.home-content, heading', { origin:'top'  });

ScrollReveal().reveal('.home-img,.services-container,.project-box, .contact form ',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});