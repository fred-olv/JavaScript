var num = [8,1,7,4,2,9]
/*
for(var posicao = 0; posicao < num.length; posicao++){
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}
*/
for(var posicao in num){
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}
