var boton=document.getElementsByClassName('btn-display')[0]

boton.addEventListener('click',function(){
    var conteiner=document.getElementsByClassName('conteiner')[0]
    conteiner.classList.toggle('off')
})

function card(titulo,informacion,img){
this.titulo=titulo
this.informacion=informacion
this.img=img

var cards ='hola' 


this.mostrarCards=function(){
    cards=document.createElement('div')
    cards.classList.add('card')
    cards.innerHTML+=
    `<img src=${this.img} alt="">

    <h2 class="titulo">
        ${this.titulo}
    </h2>
    <p class="informacion">
        ${this.informacion}
    </p>
    <button>
        Comprar
    </button>
    `
   
    var caja=document.getElementById('caja')
    caja.appendChild(cards)
    btnSacar.disabled= false
}

this.sacarCarps=function(){  
caja.innerHTML=''
btnSacar.disabled= true
}

}

var card1 = new card('Auriculares SONY','Lorem ipsum dolor sit amet consectetur','img/auriculares-sony.jpg')
var card2 = new card('Camara CANON','Lorem ipsum dolor sit amet consectetur','img/camara-canon.jpg')
var card3 = new card(' Playstation 5 SONY','Lorem ipsum dolor sit amet consectetur','img/sony-playstation-5.jpg')

console.log(card1)
console.log(card2)
console.log(card3)



var btn=document.getElementById('btn')
var btnSacar=document.getElementById('btn-sacar')
btnSacar.disabled = true


btn.addEventListener('click',function(){
card1.mostrarCards()
card2.mostrarCards()
card3.mostrarCards()

})
btnSacar.addEventListener('click',function(){
    card1.sacarCarps()
    card2.sacarCarps()
    card3.sacarCarps()
   
})

