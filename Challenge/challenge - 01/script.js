let calcular = document.querySelector('#btn');

function imc(){
    let nome = document.querySelector('input#nome');
    let altura = document.querySelector('input#altura');
    let peso = document.querySelector('input#peso');
    let resultado = document.querySelector('div#resultado');

                //Diferente (!==)               //e(&&)
    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        let valor = (peso.value /(altura.value * altura.value)).toFixed(1);
        
        resultado.textContent = valor;


    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
   
    
}
calcular.addEventListener('click', imc);


