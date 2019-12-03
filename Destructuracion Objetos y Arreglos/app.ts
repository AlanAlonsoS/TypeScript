let avenger = {
    nombre: "Steve",
    clave: "CApitan America",
    poder: "Droga"
}

let {nombre, clave,poder}=avenger; //no importa el orden, 

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

console.log(nombre,clave, poder);


let avengers:string[] = ["Thor","Steve","Tony"];

let [thor, capi, iroman] = avengers;

console.log(thor,capi,iroman);