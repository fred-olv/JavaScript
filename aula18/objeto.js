let amigo = {
    nome:'josé',
    sexo:'M',
    peso: 85.4,
    engordar(p){
        console.log('Engordou')
        this.peso+=2
    }}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)