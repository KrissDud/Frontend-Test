let dropdownMenu = document.querySelector('.dropdown-menu');
let menuNav = document.querySelector('.navigation-menu');


let menu = document.querySelector('.sidebar');
let menuItem = document.querySelectorAll('.menu-item span');
let menuList = document.querySelectorAll('.menu-item');

let openMenu = dropdownMenu.addEventListener('click', function(){
        menu.classList.toggle('open');
        });

let openSubmenu = menuItem.forEach((el)=>

        el.addEventListener('click',()=> {
        let next = el.nextElementSibling;
        next.classList.toggle('open');
        }
))
        

