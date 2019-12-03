
interface Xmen{
    nombre:string,
    poder:string
}

function enviarCuartel(xmen:Xmen){

    console.log("Enviando a: " + xmen.nombre);

};

function enviarMision(xmen:Xmen){

    console.log("Enviando a: " + xmen.nombre);

};


let wolverine:Xmen ={
    nombre: "wolverine",
    poder: "Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);