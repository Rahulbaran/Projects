// selecting items
let buttons,answers;

buttons = document.querySelectorAll('.button');
answers = document.querySelectorAll('.answer');

// click event
buttons.forEach((btn,index) => {
    btn.addEventListener('click',() => {
        answers[index].classList.toggle('answer-shower');
        btn.classList.toggle('fa-minus');
    })
});


