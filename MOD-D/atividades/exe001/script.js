let body = document.querySelector('body');


function carregar(){
    let date = new Date();
    let hour = date.getHours();
    let message = document.querySelector('#msg');
    let img = document.querySelector('#foto');

    message.innerHTML = `now are ${hour} hours`;

    if (hour >= 0 && hour < 12){
        img.src = 'imgmanha.jpg';

    }else if (hour >= 12 && hour < 18){
        img.src = 'imgtarde.jpg';

    }else {
        img.src = 'imgnoite.jpg';
    }
}


body.addEventListener('onload', carregar());
