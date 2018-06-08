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
<<<<<<< HEAD

/*Para formularioPersonalizacion.html */
function recolectarDatosPersonalizacion(){
  var lugarIngreso = document.getElementById("lugarIngreso").value;
  document.getElementById("lugarIngreso").innerHTML = lugarIngreso;

  var cantidadPersonas = document.getElementById("cantidadPersonas").value;
  document.getElementById("cantidadPersonas").innerHTML = cantidadPersonas;
  /* recoger elementos de radioButtons*/
  var seleccionMascotas = document.getElementsByName('toleranciaMascotas');
  seleccionMascotas = recogerRadioButton(seleccionMascotas);

  var seleccionRuido = document.getElementsByName('toleranciaRuido');
  seleccionRuido = recogerRadioButton(seleccionRuido);

  var seleccionVecinos = document.getElementsByName('toleranciaVecinos');
  seleccionVecinos = recogerRadioButton(seleccionVecinos);

  var seleccionConvivencia = document.getElementsByName('toleranciaConvivencia');
  seleccionConvivencia = recogerRadioButton(seleccionConvivencia);
  
}

/* para gestionEdificio.html */
function recolectarDatosEdificio(){
  var toleranciaMascotas = document.getElementsByName('toleranciaMascotas');
  toleranciaMascotas = recogerRadioButton(toleranciaMascotas);

  var toleranciaRuido = document.getElementsByName('toleranciaRuido');
  toleranciaRuido = recogerRadioButton(toleranciaRuido);

  var toleranciaVecinos = document.getElementsByName('toleranciaVecinos');
  toleranciaVecinos = recogerRadioButton(toleranciaVecinos);

  var toleranciaNiños = document.getElementsByName('toleranciaNiños');
  toleranciaNiños = recogerRadioButton(toleranciaNiños);

  var toleranciaConvivencia = document.getElementsByName('toleranciaConvivencia');
  toleranciaConvivencia = recogerRadioButton(toleranciaConvivencia);
  alert(toleranciaConvivencia);
}
/* funcion adicional, para saber cual es la seleccion de los radioButton */
function recogerRadioButton(nombreSeleccion){
  for (var i = 0, length = nombreSeleccion.length; i < length; i++) {
    if (nombreSeleccion[i].checked) {
        return nombreSeleccion[i].value;
        break;
    }
  }
}
=======
>>>>>>> parent of f51333b... recoleccion de datos finalizada
