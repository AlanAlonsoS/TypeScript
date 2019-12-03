let miFuncion = function( a ){
    return a;
}

let miFuncionF = a => a;

//-------------------------------------------------

let miFuncion2 = function(a:number,  b:number){
    return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;

//-------------------------------------------------
let miFuncion3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = ( nombre:string ) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

//--------------------------------------------------

let hulk = {
    nombre: "hulk",
    smash(){
        setTimeout(function(){
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
}

hulk.smash();


let hulk2 = {
    nombre2: "hulk",
    smash(){
        setTimeout( ()=> console.log(this.nombre2 + " smash!!"), 1500);
    }
}

hulk2.smash();