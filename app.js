let navLogo = document.querySelector('.nav-img');
let nav = document.querySelector('.nav');
navLogo.addEventListener('click',() => {
    nav.classList.toggle('nav-out');
})
// let menuBtn = document.getElementById('menuBtn')
// let sideNav = document.getElementById('sideNav')
// sideNav.style.right = "-250px";
// menuBtn.onclick = function () {
//     if (sideNav.style.right === '-250px') {
//         sideNav.style.right = '0';
//     } else {
//         sideNav.style.right = "-250px";
//     }
// }
