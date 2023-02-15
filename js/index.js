const displayValorAnterior = document.getElementById("previous-value");
const displayValorActual = document.getElementById("current-value");
const botonesNumeros = document.querySelectorAll(".number");
const botonesOperadores = document.querySelectorAll(".operator");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        display.agrgarNumero(boton.innerHTML);
    })
})

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => {
        display.computar(boton.value);
    })
})