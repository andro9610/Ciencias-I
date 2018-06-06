/* Recoleccion y retorno de datos (devuelve los datos para mostrar la habitabilidad segun un API) */

/*para index.html */
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

/*Para gestionHabitantes.html */
function recolectar_añadirHabitantes(){
  var habitantesAñadidos = document.getElementById("habitantesAñadidos").value;
  document.getElementById("habitantesAñadidos").innerHTML = habitantesAñadidos;

  var lugarHabitantesAñadidos = document.getElementById("lugarHabitantesAñadidos").value;
  document.getElementById("lugarHabitantesAñadidos").innerHTML = lugarHabitantesAñadidos;
}

function recolectar_eliminarHabitantes(){
  var habitantesEliminados = document.getElementById("habitantesEliminados").value;
  document.getElementById("habitantesEliminados").innerHTML = habitantesEliminados;

  var lugarHabitantesEliminados = document.getElementById("lugarHabitantesEliminados").value;
  document.getElementById("lugarHabitantesEliminados").innerHTML = lugarHabitantesEliminados;
}

function recolectar_mudarHabitantes(){
  var lugarOrigen = document.getElementById("lugarOrigen").value;
  document.getElementById("lugarOrigen").innerHTML = lugarOrigen;

  var lugarDestino = document.getElementById("lugarDestino").value;
  document.getElementById("lugarDestino").innerHTML = lugarDestino;
}
