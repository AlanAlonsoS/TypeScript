var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
//-------------------------------------------------
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
//-------------------------------------------------
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//--------------------------------------------------
var hulk = {
    nombre: "hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
hulk.smash();
var hulk2 = {
    nombre2: "hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre2 + " smash!!"); }, 1500);
    }
};
hulk2.smash();
