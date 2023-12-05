var prevScrollPos = window.scrollY;
var navbar = document.getElementById("navigation");

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (currentScrollPos > 90) {
    navbar.classList.add("navbg");
  } else {
    navbar.classList.remove("navbg");
  }

  prevScrollPos = currentScrollPos;
}


function removeMenu() {
    let menuCont = document.getElementById('menu-content');

    if (menuCont && window.innerWidth >= 961) {
        menuCont.classList.remove('show-menu-content');
    }
}
window.addEventListener('resize', removeMenu);
removeMenu();





let pop1 = document.getElementById('pop1');
let pop2 = document.getElementById('pop2');
let pop3 = document.getElementById('pop3');
let pop4 = document.getElementById('pop4');
let pop5 = document.getElementById('pop5');
let pop6 = document.getElementById('pop6');
let pop7 = document.getElementById('pop7');
let pop8 = document.getElementById('pop8');


function closePopup(){
    pop1.classList.remove('show-popup-cont');
    pop2.classList.remove('show-popup-cont');
    pop3.classList.remove('show-popup-cont');
    pop4.classList.remove('show-popup-cont');
    pop5.classList.remove('show-popup-cont');
    pop6.classList.remove('show-popup-cont');
    pop7.classList.remove('show-popup-cont');
    pop8.classList.remove('show-popup-cont');
}
function viewPop1(){
    pop1.classList.add('show-popup-cont');
}
function viewPop2(){
    pop2.classList.add('show-popup-cont');
}
function viewPop3(){
    pop3.classList.add('show-popup-cont');
}
function viewPop4(){
    pop4.classList.add('show-popup-cont');
}
function viewPop5(){
    pop5.classList.add('show-popup-cont');
}
function viewPop6(){
    pop6.classList.add('show-popup-cont');
}
function viewPop7(){
    pop7.classList.add('show-popup-cont');
}
function viewPop8(){
    pop8.classList.add('show-popup-cont');
}


let menuCont = document.getElementById('menu-content');
function showMenuCont(){
    menuCont.classList.toggle('show-menu-content');
    document.getElementById('navigation').classList.add('navbg');
}