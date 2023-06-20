function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#textano');
    let res = document.querySelector('p.res');
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os Dados e tente novamente');
    }else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        res.innerHTML = `idade calculada ${idade}`;
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'image');
        
        if (fsex[0].checked){
            genero = 'HOMEM'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'garoto - jovem.jpg')
                //criança
            }else if (idade > 20){
                //jovem
            }else if (idade < 50){
                //adulto
            }else {
                //velho
            }

        }else if (fsex[1].checked){
            genero = 'MULHER'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
