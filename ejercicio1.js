function calcularDistancia(coordenadax, coordenaday) {

    let cuadradox = Math.pow(coordenadax, 2);
    let cuadradoy = Math.pow(coordenaday, 2);

    let sumaCuadrados = cuadradox + cuadradoy;

    let raizCuadrada = Math.sqrt(sumaCuadrados);

    return (raizCuadrada);
}

console.log("Hoth se encuentra a ",calcularDistancia(70, -50)," años luz");
console.log("Yavin4 se encuentra a ",calcularDistancia(0, 40)," años Luz");
console.log("Tatooine se encuentra a ",calcularDistancia(-10, -10)," años luz");
console.log("Endor se encuentra a ",calcularDistancia(50, 0)," años luz");

//funcion flecha amigo, las coordenadas las saque de la diapositiva

let calculatedistance = (coordenadax, coordenaday) => {

    let cuadradox = Math.pow(coordenadax, 2);
    let cuadradoy = Math.pow(coordenaday, 2);

    let sumaCuadrados = cuadradox + cuadradoy;

    let raizCuadrada = Math.sqrt(sumaCuadrados);

    return (raizCuadrada);
}

console.log("Hoth se encuentra a ",calculatedistance(70, -50)," años luz");
console.log("Yavin4 se encuentra a ",calculatedistance(0, 40)," años Luz");
console.log("Tatooine se encuentra a ",calculatedistance(-10, -10)," años luz");
console.log("Endor se encuentra a ",calculatedistance(50, 0)," años luz");