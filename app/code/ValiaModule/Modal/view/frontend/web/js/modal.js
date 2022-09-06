define(function(){
    'use strict';

    return function(){
        const closeOverlay = document.querySelector('.overlay');
        const closeButton = document.querySelector('.modal_btn--close');
        const cancelButton = document.querySelector('.modal_btn--cancel');
    
        closeButton.addEventListener('click', closeModal);
        cancelButton.addEventListener('click', cancleModal);

        if(!localStorage.getItem("modal")){
            closeOverlay.classList.remove('is-hidden');
        }

        function cancleModal() {
            closeOverlay.classList.add('is-hidden');    
        }

        function closeModal(){
            localStorage.setItem("modal", "open");
            cancleModal();
        }

        
    }
});