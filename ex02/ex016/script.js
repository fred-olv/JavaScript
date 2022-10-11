function contar(){
    var inicio = document.getElementById('txtin')
    var final = document.getElementById('txtfn')
    var passo = document.getElementById('txtps')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ){
        window.alert('Erro')
    }else{
        res.innerHTML = 'Contando'
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            //contagem decrescente
            for(var c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}