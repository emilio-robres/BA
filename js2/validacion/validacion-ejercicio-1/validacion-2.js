
function myFunction() {
  var text;

  
    var valorSearch = document.getElementById("num").value;
    var expreg=/.{3,}/;

  if (valorSearch==""){
    text = "Es necesario introducir una palabra para realizar la busqueda";
  }
  else if (expreg.test(valorSearch)){
    text = "Datos introducidos correctamente estamos buscando.....";
  } else {
    text = "Introduzca más de 3 letras por favor";
  }
  document.getElementById("demo").innerHTML = text;
}




