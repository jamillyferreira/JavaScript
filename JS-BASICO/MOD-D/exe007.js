let agora = new Date();
let hora = agora.getHours();
console.log(`São exatamente ${hora} horas.`);
if (hora < 12) {
    console.log(`bom dia`);
} else if (hora <= 18) {
    console.log(`boa tarde`);
} else {
    console.log(`boa noite`);
}
    



