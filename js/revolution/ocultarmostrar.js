
	var boton = document.querySelectorAll(".boton1");
    var mostrarComentario = document.querySelectorAll(".no_mostrar");

    boton.forEach(function(elemento, indice){
        elemento.addEventListener("click", function(){
            mostrarComentario[indice].classList.toggle("mostrar_comentario");
            
            if (mostrarComentario[indice].classList.contains("mostrar_comentario")) {
                 elemento.innerHTML = "Ver Menos";

            } else {
            elemento.innerHTML = "Ver Más";
        }
    })
})