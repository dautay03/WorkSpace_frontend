'use strict';
const modal= document.querySelector('.modal');
const openModal= document.querySelectorAll('.show-modal');
const closeModal= document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(openModal)
const openModalevent= function (){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModalevent = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i=0; i< openModal.length; i++ ){
    openModal[i].addEventListener('click', openModalevent)
    
}
closeModal.addEventListener('click', closeModalevent)
overlay.addEventListener('click', closeModalevent)
