let navigationTab = document.querySelectorAll('.nav');
let navigationToggleBtn = document.querySelector('.nav-toggle-btn');

let classesToAdd = ['home','gallery','phone','help'];

navigationToggleBtn.addEventListener('click', function () {
   for(let i = 0; i < navigationTab.length; i++) {
       navigationTab[i].classList.toggle(classesToAdd[i]);
   }
})