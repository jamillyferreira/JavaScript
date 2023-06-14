const fnumber = document.querySelector('#fnumber');
const flist = document.querySelector('#flist');
const result = document.querySelector('#result');
const values = [] // Crei um vetor [] (array)

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){ // != (Diferente); -1(valor não encontrado)
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if(isNumber(fnumber.value) && !inList(fnumber.value, values)){
        values.push(Number(fnumber.value)) // push(adicionar um elemento no vetor[])
        const item = document.createElement('option');
        item.text = `valor ${fnumber.value} adicionado`;
        flist.appendChild(item);
        result.textContent = '';
        
    } else {
        alert('[ERRO] Valor inválido ou já encontra na lista');
    }
    fnumber.value = ''; // para limpar 
    fnumber.focus(); // deixa o foco do mouse ativo
}

function finalizar(){
    if(values.length == 0){
        alert('Adicione um numero para finalizar');
        
    } else {
        let total = values.length;
        let maior = values[0];
        let menor = values[0];
        let soma = 0;
        let media = 0;
        for(let pos in values){ //pos(posição)
            soma += values[pos];
            if(values[pos] > maior)
                maior = values[pos];

            if(values[pos] < menor)
            menor = values[pos];
        }
        media = soma / total
        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo temos ${total} numero cadastrado</p>`;
        result.innerHTML += `<p>O maior valor informado foi ${maior} </p>`;
        result.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        result.innerHTML += `<p>A soma dos valores são  ${soma}</p>`;
        result.innerHTML += `<p>A media dos valores é ${media}</p>`;
    }
}