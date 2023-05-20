document.addEventListener('DOMContentLoaded',function(){
    var viTriSlide = 0;
    const autoSlide = document.querySelectorAll('.slide-text__content');
    let boolBtn = false;
    const navbarModal = document.querySelector('.navbar__modal');
    const navIcon = document.querySelector('.navbar__search .feature__icon i');
    const navClose = document.querySelector('.navbar__modal .modal__close i');
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
                        navIcon.style.display = 'none';
                        navbarModal.classList.add('showNavBar');
                }

                navClose.onclick = ()=> {
                        navIcon.style.display = 'block';
                        navbarModal.classList.remove('showNavBar');
                }
        

    })
    