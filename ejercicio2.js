function recibirdatos(codigo){
    if(codigo === "ARQ2555"){
        console.log(`${codigo} Sara Bel-Sun`)
    }else if(codigo === "ARQ2556"){
        console.log(`${codigo} Nodin chavdri`)
    }else if(codigo === "ARQ2557"){
        console.log(`${codigo} Finn`)
    }else{
        console.log(`el codigo ${codigo} es falso`)
    }

}
console.log(recibirdatos("ARQ2557"));

//fucion flecha

let takedata = (code) =>{
    if(code === "ARQ2555"){
        console.log(`${code} Sara Bel-Sun`)
    }else if(code === "ARQ2556"){
        console.log(`${code} Nodin Chavdri`)
    }else if(code === "ARQ2557"){
        console.log(`${code} Finn`)
    }else{
        console.log("are you a pirate?")
    }
}

console.log(takedata("ARQ2555"));