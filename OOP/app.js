let ingredient = ['mel', 'água', 'sal', 'mostarda']; //vetor


function capitalizar(ingredient) { // funcão que capitaliza
    let modif = [];
    for (let c = 0; c < ingredient.length; c++){
        let letterInitial = ingredient[c].charAt(0).toUpperCase();
        let restText = ingredient[c].slice(1);
        let result = letterInitial + restText;
        modif[c] = result;     
    }
    return modif;
}


function ordenar(ingredient){ // função que ordena
    return ingredient.sort(function(a,b) {
    return a.localeCompare(b);
});

}
console.log(capitalizar(ingredient));
console.log(ordenar(ingredient));