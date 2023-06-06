let button = document.querySelector('#button');

function tabuada(){
    let number = document.querySelector('#number').value;
    let tab = document.querySelector('#selTab');

    if (number.length == 0){
        alert('[ERRO] Por favor, Digite um número!');

    } else {
        tab.innerHTML = '';
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${number} x ${c} = ${number* c}`;
            tab.appendChild(item);
        }
        
    } 
    
}
button.addEventListener('click', tabuada);