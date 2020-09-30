let robarPlanos = (numeroSerie, despegar) => {
   
    if(numeroSerie <= 10) {
        let mensaje= `tenemos el plano de las mecanicas ${numeroSerie}`;
        despegar(null,mensaje);
   
    } else{
        let mensaje= "tiene el plano equivocado";
        despegar(mensaje,null);
    }
}

robarPlanos(13, (error,mensaje) => {
    if(error){
        console.log(error);
    }else{
        console.log(mensaje);
    console.log("estamos despegando")
    }
    
});