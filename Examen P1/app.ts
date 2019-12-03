
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE : {nombre:string, edad:number } ={
  nombre: nombre,
  edad: edad
};

console.log(PERSONAJE)
//-------------------------------------------------------------------
interface Batman{
  nombre:string,
  artesMarciales:string[];
}

let Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(Batman);

//----------------------------------------------------------------------

let resultadoDoble = (a:number, b:number) => (a + b)*2;
console.log(resultadoDoble);

//----------------------------------------------------------------------

function getAvenger( nombre:string, poder?:string, arma:string ="arco" ){
  let mensaje:string;
  if( poder ){
    mensaje = ` ${nombre} tiene el poder de: ${poder}  y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${poder}`;
  }
  console.log(mensaje);
};

getAvenger("howkeye","tiro","arco");

//----------------------------------------------------------------------

class Rectagulo {
  base:number;
  altura:number;

  calcularArea():number{
    return this.base * this.altura;
  }
}
