function enviarCuartel(xmen) {
    console.log("Enviando a: " + xmen.nombre);
};

function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
};
var wolverine = {
    nombre: "wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);