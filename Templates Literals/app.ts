function getNombre(){
    return "Alan"
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, ";
let texto = `Hola, 
${ nombre} ${apellido} 
(${edad})`;

let texto2:string = `${getNombre()}`;

console.log(texto2)