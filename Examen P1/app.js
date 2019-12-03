var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
var Batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(Batman);
//----------------------------------------------------------------------
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble);
//----------------------------------------------------------------------
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = " " + nombre + " tiene el poder de: " + poder + "  y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    console.log(mensaje);
}
;
getAvenger("howkeye", "tiro", "arco");
//----------------------------------------------------------------------
var Rectagulo = /** @class */ (function () {
    function Rectagulo() {
    }
    Rectagulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectagulo;
}());
