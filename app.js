var int_parrafo = document.getElementById("parrafo");

var bt_encriptar = document.getElementById("encriptar");
var bt_desencriptar = document.getElementById("desencriptar");

var p_texto = document.getElementById("texto");

function encriptar(){
    debugger
    p_texto.textContent ="";

    let encriptada = int_parrafo.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    p_texto.textContent = encriptada;
    int_parrafo.value = "";

return encriptada;
};

function desencriptar(){

    p_texto.textContent = "";

    let desencriptada = int_parrafo.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    p_texto.textContent = desencriptada;
    int_parrafo.value = "";
 
};

function copy(){

    navigator.clipboard.writeText(p_texto.textContent);
};
