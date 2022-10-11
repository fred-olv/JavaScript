function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src ='imagens/manha250.png'
        window.document.body.style.background ='#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
    }else if(hora >= 12 && hora < 18 ){
        //boa tarde!
        img.src = 'imagens/tarde250.png'
        window.document.body.style.background ='#b9846f'
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
    }else{
        //boa noite!
        img.src = 'imagens/noite250.png'
        window.document.body.style.background ='#515154'
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
    }
}
