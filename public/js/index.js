let main = document.querySelector(".container")
let h2 = document.querySelector("h2")
let a = document.querySelector("a")
let p = document.querySelectorAll("p")

let mensaje=prompt("ingrese su nombre")


 if(mensaje.length>0){
 
    h2.innerHTML += mensaje
    
 }
 else{
    h2.innerHTML += "Invitado"
    
 }
 h2.style.textTransform = "uppercase" 
 

a.style.color="#E51B3E"

/* ● A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
 */

p.forEach((elemento,indice)=>{
  if(indice%2==0){
    elemento.classList.add("destacadoPar")
  }
  else{
    elemento.classList.add("destacadoImpar")
  }
})
/* ● Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “fondo”. */

let fondo= confirm("Desea colocar un fondo de pantalla?")

if(fondo){
    document.querySelector("body").classList.add("fondo")
}

main.style.display = "block"

