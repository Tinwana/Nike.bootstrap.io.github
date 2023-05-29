document.addEventListener('DOMContentLoaded',function(){
        const navbarModal = document.querySelector('.navbar__modal');
        const navIcon = document.querySelector('.feature__icon i');
        const navClose = document.querySelector('.modal__close i');
        const inputElement = document.querySelector('.search__group .search__input');
        const inputIcon = document.querySelector('.search__group .search__icon');
   const app = {
        autoShowSlide: function (){
                let viTriSlide = 0;
                const autoSlide = document.querySelectorAll('.slide-text__content');
                var i; 
                for (i = 0; i< autoSlide.length;i++) {
                    autoSlide[i].style.display="none";
                }
                 viTriSlide++;
                if(viTriSlide>autoSlide.length-1){
                    viTriSlide=0;
                }
                autoSlide[viTriSlide].style.display="block";
                }  ,
        handleEvent: function() {
                navIcon.onclick = ()=> {
                        navIcon.style.opacity = 0;
                        navbarModal.classList.add('showNavBar');
                }

                navClose.onclick = ()=> {
                        navIcon.style.opacity = 1;
                        navbarModal.classList.remove('showNavBar');
                }
                inputIcon.onclick = e => {
                        
                }
                
                
        },
        start: function() {
                setInterval(app.autoShowSlide,2000);
                app.handleEvent();
        }
                
   }
   app.start();
        
   



        
    })
    