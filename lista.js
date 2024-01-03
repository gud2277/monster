var lista = document.getElementById("lista");
var verduras = ["papas", "tomate", "batata", "pimientos"];
var listado = [];  

for(var i = 0; i < verduras.length; i++){
    listado.push("<li>"+verduras[i]+"</li>");

};

lista.innerHTML = listado.join("");
    