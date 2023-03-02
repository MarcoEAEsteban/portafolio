let nombre = document.getElementById('nome')
let email = document.getElementById('email')
let asunto = document.getElementById('asunto')


let boton = document.getElementById('boton')
boton.addEventListener('click' , enviar)
function enviar(){
    
    if(nombre.value == 0 || email.value == 0 || asunto.value == 0){
        alert("Digite los espacios requeridos")
    }else{
        let respuesta = document.getElementById('res')
        let nom = nombre.value
        respuesta.innerHTML =`Señor <strong>${nom}</strong>, gracias por su interes en mi persona, por el momento aun no tengo los conocimientos necesarios en back-end, por lo cual le dejare mi correo electronico: <strong>'marcoaucaruri@gmail.com'</strong> para ponernos en contacto, gracias por su comprencion.`
    }
    formulario.reset()
}
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 400)
})

function backtop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}