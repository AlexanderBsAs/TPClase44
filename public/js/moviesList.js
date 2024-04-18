let body= document.querySelector("body")
let h1=document.querySelector("h1")

let modoOscuro= prompt("Desea modo oscuro?")

if(modoOscuro.toUpperCase != "NO" ){

    body.style.backgroundColor = "#7f7f7f"
    body.classList.add("fondoMoviesList")
}

h1.innerHTML += "LISTADO DE PELÍCULAS"

h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"