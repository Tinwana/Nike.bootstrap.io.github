document.addEventListener('DOMContentLoaded',function(){
    var viTriSlide = 0;
    const autoSlide = document.querySelectorAll('.slide-text__content');
    let boolBtn = false;
    const navbarModal = document.querySelector('.navbar__modal');
    const navIcon = document.querySelector('.feature__icon i');
    const navClose = document.querySelector('.modal__close i');
        function autoShowSlide(){
                var i; 
                for (i = 0; i< autoSlide.length;i++) {
                    autoSlide[i].style.display="none";
                }
                 viTriSlide++;
                if(viTriSlide>autoSlide.length-1){
                    viTriSlide=0;
                }
                autoSlide[viTriSlide].style.display="block";
                }  
        setInterval(autoShowSlide,4000);
                navIcon.onclick = ()=> {
                        navIcon.style.opacity = 0;
                        navbarModal.classList.add('showNavBar');
                }

                navClose.onclick = ()=> {
                        navIcon.style.opacity = 1;
                        navbarModal.classList.remove('showNavBar');
                }
        

    })
    