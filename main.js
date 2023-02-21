
//heroe:
// let tipoDeHeroe = " "
let danioBase = 0
let vidaBase = 0
//villano:
// let tipoDeMonstruo = " "
let danioMonstruoBase = 0
let vidaMonstruoBase = 0

//Elige tu heroe


function crearHeroe(tipoDeHeroe) {
    // const heroe= prompt("Desea crear un mago, guerreo o tanque?");
    // const tipoDeHeroe="mago";

    switch (tipoDeHeroe){
        case "mago": 
        vidaBase = 225;
        danioBase = 150;
        break;

        case "guerrero":
        vidaBase = 300;
        danioBase = 80;
        break;
    
        case "tanque":
        vidaBase = 450;
        danioBase = 50;
        break;
        default:
            alert("tipo de heroe no valido");
    }
    return tipoDeHeroe;
        
}


//elige tu Monstruo

function crearMonstruo(tipoDeMonstruo) {
    switch (tipoDeMonstruo){
        case "gobling":
        vidaMonstruoBase = 180;
        danioMonstruoBase = 70;
        break;

        case "orco":
        vidaMonstruoBase = 350;
        danioMonstruoBase = 130;
        break;
    
        case "tanque":
        vidaMonstruoBase = 450;
        danioMonstruoBase = 110;
        break;
        default:
            alert("tipo de monstruo no valido");
    }   
        return tipoDeMonstruo;
}

function batallas() {
    for (let batalla = 1; batalla <=3; batalla++){
        quienEmpieza= 0
        if (Math.random()<0.5){
            if (batalla ===1){
                vidaMonstruoBase = vidaMonstruoBase - danioBase;
                console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ahora tiene ${vidaMonstruoBase} puntos de vida`);
                }
            else if (batalla ===2){
                vidaBase = vidaBase - danioMonstruoBase;
                console.log(`El ${tipoDeMonstruo} ha atacado al ${tipoDeHeroe}, por ${danioMonstruoBase} de daño. El heroe ahora tiene ${vidaBase} puntos de vida`);
            }
            else if (batalla === 3){
                vidaMonstruoBase= vidaMonstruoBase - danioBase;
                console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ahora tiene ${vidaMonstruoBase} puntos de vida`);
                break;
                }
        }
        else{
            if (batalla ===1){
                vidaBase = vidaBase - danioMonstruoBase;
                console.log(`El ${tipoDeMonstruo} ha atacado al ${tipoDeHeroe}, por ${danioMonstruoBase} de daño. El heroe ahora tiene ${vidaBase} puntos de vida`);
                
            }
            else if (batalla ===2){
                vidaMonstruoBase = vidaMonstruoBase - danioBase;
                console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ahora tiene ${vidaMonstruoBase} puntos de vida`);
            }
            else if (batalla === 3){
                vidaBase = vidaBase - danioMonstruoBase;
                console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ahora tiene ${vidaMonstruoBase} puntos de vida`);
                break;
            }
        }
    }

    if (vidaMonstruoBase <= 0){
        console.log(`El ${tipoDeMonstruo} ha caído. El ganador del encuentro es el: ${tipoDeHeroe}`);
    }
    else if (vidaBase <=0){
        console.log(`El ${tipoDeHeroe} ha caído. El ganador del encuentro es el: ${tipoDeMonstruo}`);
    }
    else {
        console.log(`la vida del ${tipoDeHeroe} es ${vidaBase} y la del ${tipoDeMonstruo} es ${vidaMonstruoBase}`);
        if (vidaBase>vidaMonstruoBase){
            console.log(`el ganador de la batalla es ${tipoDeHeroe}`);
        }
        else {
            console.log(`el ganador de la batalla es ${tipoDeMonstruo}`);
        }
    }
}

// ejecutar la funcion para que las persona determine el tipo de heroe que desea

const tipoDeHeroe = prompt("Desea crear un mago, guerrero o tanque?")
// const tipoDeHeroe = "mago"
const heroe1 =  crearHeroe(tipoDeHeroe);

//ejecutar la funcion para que la personas determine el tipo de monstruo que desea

const tipoDeMonstruo= prompt("Desea crear un gobling, orco o demonio?");
// const tipoDeMonstruo = "gobling"
const monstruo1= crearMonstruo(tipoDeMonstruo)


// //Batalla entre el heroe y el monstruo

batallas();
