( function () {

    //selecting input field and all the buttons
    let inputScreen, btn, clearBtn, equalBtn;
    inputScreen = document.querySelector('.screen');
    btn = document.querySelectorAll('.btn');
    clearBtn = document.querySelector('.clear');
    equalBtn = document.querySelector('.equal');


    // Clearing the input field
    clearBtn.addEventListener('click',() => {
        inputScreen.value = '';
    });

    // On clicking general button
    for(let i = 0; i < btn.length ; i++) {
        btn[i].addEventListener('click',() => {
            if(inputScreen.value === 'Please Enter Some Values') {
                inputScreen.value = '';
            }
        let value = btn[i].dataset.value;
        inputScreen.value += value; 
        })
    };

    //On clicking equal button 
    equalBtn.addEventListener('click', () => {
        if(inputScreen.value === '') {
            inputScreen.value = 'Please Enter Some Values';  
        }
        else {
            let answer = eval(inputScreen.value);
            inputScreen.value = answer;   }
    });

}) (); 




