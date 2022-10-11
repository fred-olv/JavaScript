function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value == 0 || fano.value > ano ){
        window.alert('erro')
    }else {
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('mas')
        var genero_feminino = document.getElementById('fem')
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if( genero_masculino.checked){
            var genero ='Homem'
            if(idade > 0 && idade <= 14){
                //criança
                img.setAttribute('src','menino250.png')
            }else if(idade > 14 && idade <= 30){
                //rapaz
                img.setAttribute('src', 'rapaz250.png')
            }else if(idade > 30 && idade <= 60){
                //adulto
                img.setAttribute('src','homem250.png')
            }else {
                //idoso
                img.setAttribute('src','velho250.png')
            }
        }else if( genero_feminino.checked){
            var genero = 'Mulher'
            if(idade > 0 && idade <= 14){
                //criança
                img.setAttribute('src','menina250.png')
            }else if(idade >14 && idade <= 30){
                //rapariga
                img.setAttribute('src','rapariga250.png')
            }else if(idade > 30 && idade <= 60){
                //adulta
                img.setAttribute('src', 'mulher250.png')
            }else{
                //idosa
                img.setAttribute('src','velha250.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}