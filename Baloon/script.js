let baloon = document.querySelector('p');


function handler(){
    let currentfont = window.getComputedStyle(baloon, null).getPropertyValue('font-size');
    let currentSize = parseFloat(currentfont);
    if (event.key == "ArrowUp") {
        if (currentSize > 100){
            baloon.innerText = "💥";
            document.body.removeEventListener("keydown", handler); 
        }
        else{
            baloon.style.fontSize = (currentSize + 1) + 'px'; 
        }    
    }
    else if (event.key == "ArrowDown"){
        baloon.style.fontSize = (currentSize - 1) + 'px';
    }
}

document.body.addEventListener("keydown", handler);