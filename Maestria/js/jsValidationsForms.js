
function fxValidaFrm() {

  if($("#regDescripcion").val().trim()=="") return "Ingrese Descripción del Producto";

  if($("#txtPrecio").val().trim()=="") return "Ingrese el precio del Producto";

  if($("#txtcantidad").val().trim()=="") return "Ingrese Valor del Cantidad del Producto";
  
  var valor = $("#txtcantidad").val().trim();
  if (isNaN(valor))  return "Ingrese Cantidad Válido"
  
  if(valor <0 ) return "Ingrese Valor del Cantidad del Producto mayor a 0";
   
  return "";
}


function showErrorModalMsg(Titulo, Mensaje) {
  $('#modalSmsTitle').text(Titulo,);
  $('#modalSmsBody').html('<i class="fa fa-exclamation-circle" style="color:red" aria-hidden="true"></i> <b>' + Mensaje + '</b>');
  $('#modalSms').modal('show');
}

function showSuccessModalMsg(Titulo, Mensaje) {
  $('#modalSmsTitle').text(Titulo,);
  $('#modalSmsBody').html('<i class="fa fa-info-circle" style="color:blue" aria-hidden="true"></i> <b>' + Mensaje + '</b>');
  $('#modalSms').modal('show');
}




