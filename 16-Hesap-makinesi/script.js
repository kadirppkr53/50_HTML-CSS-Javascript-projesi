let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        handleInput(e.target.innerHTML);
    })
})

window.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Enter') key = '=';
    if (key === 'Backspace') key = 'DEL';
    if (key === 'Escape') key = 'AC';
    
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '=', 'DEL', 'AC'].includes(key)) {
        handleInput(key);
    }
});

function handleInput(value) {
    if(value == '='){
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Hata";
            string = "";
        }
    }
    else if(value == 'AC'){
        string = "";
        input.value = string;
    }
    else if(value == 'DEL'){
        string = string.toString().substring(0, string.length-1);
        input.value = string;
    }
    else{
        string += value;
        input.value = string;
    }
}