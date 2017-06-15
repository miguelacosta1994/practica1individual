function colorDeFondo() {
document.body.style.background="blue";
document.getElementById("mensaje").style.color="white";
}

function validar() {
	var flag = true;
	var form= document.getElementById("registro");
	var nombre = form.nombre;
	if (nombre.value==""){
		flag= false;
		alert("Debe ingresar nombre");
		nombre.focus();
	}
	
	return flag;
}