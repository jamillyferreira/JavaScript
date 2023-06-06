
let turnOn = document.querySelector('#turnOn');
let turnOff = document.querySelector('#turnOff');
let lamp = document.querySelector('#lamp')

function lampOn(){
    lamp.src = './image/ligada.jpg';
}

function lampOff(){
    lamp.src = './image/desligada.jpg'
}

function lampBroken(){
    lamp.src = './image/quebrada.jpg'

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);

