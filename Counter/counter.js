let textArea,allBtns;

//selecting all the buttons at once using querySelectorAll
allBtns = document.querySelectorAll('.btn');
//text Area
textArea = document.querySelector('#text');

//increment counter
allBtns[2].addEventListener('click', () => {
    let currentValue = parseInt(textArea.innerHTML);
    textArea.innerHTML = (++currentValue); 
    changeColor();
});

// decrement counter
allBtns[0].addEventListener('click',() => {
    let currentValue = parseInt(textArea.innerHTML);
    textArea.innerHTML = (--currentValue);
    changeColor();
});

// reset counter 
allBtns[1].addEventListener('click', ()=> {
    textArea.innerHTML = 0;
    textArea.style.color = '#000';
});

//text color changing function
function changeColor(){
    if(parseInt(textArea.innerHTML) < 0) textArea.style.color = 'red';
    else if(parseInt(textArea.innerHTML) === 0) textArea.style.color = 'black';
    else textArea.style.color = 'green';
}