let person = { // objeto
    name: 'jamilly',
    genero: 'F',
    peso: 50,
    engordar(p){  //função
        this.peso += p
        console.log('Engordou');
    }

}

console.log(`${person.name} pesa ${person.peso} kg`)