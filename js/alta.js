function inicAlta(){
    
let productos=[]
let formulario=document.querySelector('form')
let inputs=document.querySelectorAll('input')
let btn=document.querySelector('button')
btn.disabled=true


function validit(mensaje,indice){
let divs=document.querySelectorAll('form div')

divs[indice].innerHTML=mensaje
divs[indice].style.display=mensaje?'block':'none'
}


let validador=[false,false,false]

function validarBtn(){
    let valor=validador[0]&&
              validador[1]&&
              validador[2]

    return !valor          
}


let rex=[
    /^\w+$/,
    /^\w+$/,
    /^\d+$/
]

inputs.forEach((input,indice)=>{
    input.addEventListener('input',function(){
        validar(input.value,rex[indice],indice)
    })
})


function validar(valor,validar,indice){
    let mensaje=''

    if(!validar.test(valor)){
        mensaje='Campo incorrecto'
        validit(mensaje,indice)
        validador[indice]=false
        btn.disabled=true
        return null
    }
    
    
    mensaje=''
    validit(mensaje,indice)
    validador[indice]=true
    btn.disabled=validarBtn()
    return valor
}


formulario.addEventListener('submit',function(e){
e.preventDefault()


let producto={
    nombre:inputs[0].value,
    apellido:inputs[1].value,
    edad:inputs[2].value
}

productos.push(producto)
console.log(productos)
mostrarPoductos()

////////////////////////////
inputs.forEach((input)=>{
    input.value=''
})
btn.disabled=true
validador=[false,false,false]

})

function mostrarPoductos(){
    let xhr=new XMLHttpRequest
    xhr.open('get','plantillas/listado.hbs')
    xhr.addEventListener('load',()=>{
        if(xhr.status==200){
            let plantilla=xhr.response
            var template=Handlebars.compile(plantilla)
            let html=template({productos:productos})
            let mostrar=document.getElementById('mostrar')
            mostrar.innerHTML=html

        }
    })
    
    xhr.send()
}

}