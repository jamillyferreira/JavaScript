function calcular(){
    let inicio = document.querySelector('#txtInicio').value;
    let fim = document.querySelector('#txtFim').value;
    let passo = document.querySelector('#txtPasso').value;
    let result = document.querySelector('#result');

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO] faltando numeros');

    } else {
        result.innerHTML = 'Contando: ';
        let i = Number(inicio);
        let f = Number(fim);
        let p = Number(passo);

        if (p <= 0){
            alert('Impossivel Contar!, Considerando Passo 1:');
            p = 1
        }

        if (i < f){
            //CONTAGEM CRECESNTE
            for (let contandor = i; contandor <= f; contandor += p ){
                result.innerHTML += `${contandor} `;
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (let contandor = i; contandor >= f; contandor -= p){
                result.innerHTML += ` ${contandor} `;
            }
        }
        

    }

   
}

