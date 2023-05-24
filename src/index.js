document.addEventListener('DOMContentLoaded',function(){
        
        let boolBtn = false;
        const navbarModal = document.querySelector('.navbar__modal');
        const navIcon = document.querySelector('.feature__icon i');
        const navClose = document.querySelector('.modal__close i');
        const dropDownFilter = document.querySelector('.dropdown__icon-filter');
        const dropdownSort = document.querySelector('.dropdown__icon-sort');
        const filterItem = document.querySelector('.dropdown__filter');
        const sortItem = document.querySelector('.dropdown__sort');
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
                dropDownFilter.onclick = ()=> {
                        filterItem.classList.toggle('show');

                }
                dropdownSort.onclick = ()=> {
                        sortItem.classList.toggle('show');

                }
        },
        start: function() {
                setInterval(app.autoShowSlide,4000);
                app.handleEvent();
        }
                
   }
   app.start();
        
   



        
    })
    