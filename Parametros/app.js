function activar(quien, //Parametro obligatorio, son algo que se necesita la funcion para trabajar si no se envia esa funcion no deberia trabajar
objeto, //Parametro por defecto, es aquel que se puede enviar o no pero si no se envia tiene un valor por defecto dentro de si
momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "tarde");
