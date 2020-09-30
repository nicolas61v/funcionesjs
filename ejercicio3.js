function calculartemperatura(temperaturaMx, temperaturaMn){
    let tempinicio = (temperaturaMn)
    let tempfin = (temperaturaMx)

    let tempmedia = ((tempinicio + tempfin)/2)
    return(tempmedia)
}
    console.log("la temperatura media es ",calculartemperatura(-20, 10))

//funcio flecha

let calculateTemp = (tempMx, tempMn) => {
    let tempstart = (tempMn)
    let tempend = (tempMx)

    averagetemp = ((tempstart + tempend)/2)
    
    return(averagetemp);
}

console.log("the average temperature is ",calculateTemp(10, 20))