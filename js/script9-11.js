// Ejercicio 9
function cambiar() {
    document.getElementById("titulo").innerText = "Hola mundo con Javascript";
}
// Ejercicio 10
function cambiarColor() {
    document.getElementById("titulo").style.color = "red";
    document.getElementById("titulo").style.textAlign = "center";
}
// Ejercicio 11
function crearDiv() {
    let nuevoDiv = document.createElement ("div");
    nuevoDiv.innerText = "Nuevo Div";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.textAlign = "center";
    document.getElementById("contenedor").appendChild(nuevoDiv);
}