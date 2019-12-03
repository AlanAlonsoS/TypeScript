function activar ( 
    quien:string, //Parametro obligatorio, son algo que se necesita la funcion para trabajar si no se envia esa funcion no deberia trabajar
    objeto:string = "batiseñal", //Parametro por defecto, es aquel que se puede enviar o no pero si no se envia tiene un valor por defecto dentro de si
    momento?:String ){ //Parametro opcional, son aquellos que se pueden enviar dentro de la funcion pero fuera de esta tiene un valor NULL, el primer parametro no pude ser opcional

let mensaje:string;

if (momento){
mensaje =`${quien} activo la ${objeto} en la ${momento}`;
} else{
mensaje = `${quien} activo la ${objeto}`;
}

console.log(mensaje);

}

activar("Gordon", "batiseñal", "tarde");