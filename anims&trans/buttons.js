const display = document.querySelector(".display")

let counterValue = 0;

function increamentCounter(){
counterValue = counterValue + 1;
display.textContent= `${counterValue}`;
}

function decreamentCounter(){
    counterValue = counterValue - 1;
    display.textContent= `${counterValue}`;
}

const subButton = document.getElementsById("sub-button");

const addButton = document.getElementsById("add-button");

subButton.addEventListener("click", decreamentCounter);
addButton.addEventListener("click", increamentCounter);
setTimeout(function(){
    clearInterval(ref);
}, 1000)



