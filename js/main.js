"use strict"


 


const isMobile = { 
    Android: function () {
        return navigator.userAgent.match(/Android/i);

    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);

    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);

    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);

    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);

    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||   
            isMobile.Opera() ||
            isMobile.Windows());
     
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length>0){
        for(let i=0;i<menuArrows.length;i++){
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener("click",function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }



} else {
    document.body.classList.add('_pc');
}


/* Прокрутка при клике  */


const menuLinks =document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length>0) {
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink =e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
        }
    }
   
}
 /* Меню бургер */
 const iconMenu = document.querySelector('.menu__icon');
 if (iconMenu) {
     const menuBody = document.querySelector('.menu__body');
     iconMenu.addEventListener("click", function(e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');

         menuBody.classList.toggle('_active');

     });
 }

 