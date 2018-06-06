/* Recoleccion y retorno de datos (devuelve los datos para mostrar la habitabilidad segun un API) */

function recolectarFenomenos(){
  var fenomenoAgregado = document.getElementById("fenomenoAgregado").value;
  var fenomenoQuitado = document.getElementById("fenomenoQuitado").value;
}

function recolectarDatosMantenimiento(){
  var habitacionSeleccionada = document.getElementById("habitacionSeleccionada").value;
  document.getElementById("habitacionSeleccionada").innerHTML = habitacionSeleccionada;

  /*Estados de habitacion: 0=Disponible 1=Mantenimiento */
  var estadoHabitacion = document.getElementById("estadoHabitacion").value;
}
