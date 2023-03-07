let menu=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
};

const sr= ScrollReveal({
    distance:'60px',
    duration:2500,
    reset:true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal('.about, .services, .cta, .resume, .contact, .copyright',{delay:200, origin:'top'})


// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//     });



//     $('.navbar li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('#menu-icon').click(function(){
//         $('.navbar ').toggleClass("active");
//         $('#menu-icon').toggleClass("active");
//     });

// });

// var modal = document.getElementsByClassName('navbar');
// var btn = document.getElementById("menu-icon");
// // var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// // span.onclick = function() {
// //     modal.style.display = "none";
// // }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }