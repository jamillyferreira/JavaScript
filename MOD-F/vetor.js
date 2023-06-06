let valores = [1, 3, 5 , 4 , 2 ];
valores.sort();
 
 /*
 for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
 }
 */

 for (let pos in valores){ // Essa Sintaxe só funciona para array e objectos
    console.log(`A posição ${pos} tem os ${valores[pos]}`)

 }
