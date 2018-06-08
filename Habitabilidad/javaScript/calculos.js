/* Funciones de rescate de datos */

/**Definicion de variables */
var tituloPagina;
var fenomenoAgregado;
var fenomenoQuitado;
var habitacionSeleccionada;
var estadoHabitacion;
var cantidadHabitantesAñadidos;
var lugarHabitantesAñadidos;
var cantidadHabitantesEliminados;
var lugarHabitantesEliminados;
var lugarOrigen;
var lugarDestino;
var toleranciaMascotas;
var toleranciaRuido;
var toleranciaNiños;
var toleranciaVecinos;
var toleranciaConvivencia;
var nivelMascotas;
var nivelRuido;
var nivelNiños;
var nivelVecinos;
var nivelConvivencia;
var exponenteMascotas;
var exponenteRuido;
var exponenteVecinos;
var exponenteNiños;
var exponenteConvivencia;
var toleranciaTotal;
/**variables de ubicacion */
var piso;
var apartamento;

/**para index.html */
function recolectarFenomenos(){
    fenomenoAgregado = document.getElementById("fenomenoAgregado").value;
    fenomenoQuitado = document.getElementById("fenomenoQuitado").value;
}

function recolectarDatosMantenimiento(){
    habitacionSeleccionada = document.getElementById("habitacionSeleccionada").value;
    estadoHabitacion = document.getElementById("estadoHabitacion").value;
}

/**Para gestionHabitantes.html */

function recolectarDatosGestionHabitantes(){
    cantidadHabitantesAñadidos = document.getElementById("habitantesAñadidos").value;
    lugarHabitantesAñadidos = document.getElementById("lugarHabitantesAñadidos").value;

    cantidadHabitantesEliminados = document.getElementById("habitantesEliminados").value;
    lugarHabitantesEliminados = document.getElementById("lugarHabitantesEliminados").value;

    lugarOrigen = document.getElementById("lugarOrigen").value;
    lugarDestino = document.getElementById("lugarDestino").value;
}

/**Para formularioPersonalizacion.html */

function recolectarDatosPersonalizacion(){
    cantidadHabitantesAñadidos_Personalizacion = document.getElementById("cantidadPersonas");
    lugarHabitantesAñadidos_Personalizacion = document.getElementById("lugar");

    toleranciaMascotas = document.getElementsByName("toleranciaMascotas");
    toleranciaMascotas = recogerRadioButton(toleranciaMascotas);

    toleranciaRuido = document.getElementsByName("toleranciaRuido");
    toleranciaRuido = recogerRadioButton(toleranciaRuido);
    
    toleranciaVecinos = document.getElementsByName("toleranciaVecinos");
    toleranciaVecinos = recogerRadioButton(toleranciaVecinos);

    toleranciaNiños = document.getElementsByName("toleranciaNiños");
    toleranciaNiños = recogerRadioButton(toleranciaNiños);

    toleranciaConvivencia = document.getElementsByName("toleranciaConvivencia");
    toleranciaConvivencia = recogerRadioButton(toleranciaConvivencia);
}

/**para gestionEdificio.html */
function recolectarDatosGestionEdificio(){
    nivelMascotas = document.getElementsByName("nivelMascotas");
    nivelMascotas = recogerRadioButton(nivelMascotas);

    nivelRuido = document.getElementsByName("nivelRuido");
    nivelRuido = recogerRadioButton(nivelRuido);
    
    nivelVecinos = document.getElementsByName("nivelVecinos");
    nivelVecinos = recogerRadioButton(nivelVecinos);

    nivelNiños = document.getElementsByName("nivelNiños");
    nivelNiños = recogerRadioButton(nivelNiños);

    nivelConvivencia = document.getElementsByName("nivelConvivencia");
    nivelConvivencia = recogerRadioButton(nivelConvivencia); 
}

function calcularExponentes(){
    exponenteMascotas = 1*(10^nivelMascotas);
    exponenteRuido = 1*(10^nivelRuido);
    exponenteVecinos = 1*(10^nivelVecinos);
    exponenteNiños = 1*(10^nivelNiños);
    exponenteConvivencia = 1*(10^nivelConvivencia);
}
/**Funcion que permite puntuar la tolerabilidad de una habitacion */
function calcularTolerabilidad(){
    toleranciaTotal = toleranciaMascotas*exponenteMascotas
                     +toleranciaRuido*exponenteRuido
                     +toleranciaVecinos*exponenteVecinos
                     +toleranciaNiños*exponenteNiños
                     +toleranciaConvivencia*exponenteConvivencia;
}

/**Funcion que crea el edificio */
var habitacionesEdificio = new Array();
var habitacionIndividual = new Array();
var cantidadHabitantesActuales;

function crearEdificio(){
    for(var j=0;j<5;j++){
        for(var i=0;i<4;i++){
            habitacionesEdificio.push(
                //Orden de propiedades por habitacion (numeroHabitacion,toleranciaActual,cantidadHabitantes,disponibilidad)
                habitacionIndividual.push([(j+1)*10]+[(i+1)],3,0,1)
            );            
        }
    }
}

var edificio;
var dibujar;

function dibujarEdificio(){
    edificio = document.getElementById("c");
    dibujar = edificio.getContext("2d");
    for(var j=0;j<5;j++){
        for(var i=0;i<4;i++){
            dibujar.beginPath();
            dibujar.arc(80+(180*i),450-(100*j),20,0,Math.PI*2,false);
            dibujar.fillStyle = "green";
            dibujar.strokeStyle = "white";
            dibujar.lineWidth = 5;
            dibujar.fill();
            dibujar.stroke();
            dibujar.closePath();
        }
    }
}
/**Funcion Principal del proyecto, permite modificar la habitabilidad de el edificio */
function actualizarHabitabilidad(){
    tituloPagina = document.getElementById("titulo").innerHTML;
    switch(tituloPagina){
        case 'Habitabilidad de un Edificio: Inicio':
            dibujarEdificio();
            break;
        case 'Habitabilidad de un edificio: Gestion de Habitantes':
            recolectarDatosGestionHabitantes();
            break;
        case 'Habitabilidad de un edificio: Personalizacion de preferencias':
            recolectarDatosPersonalizacion();
            break;
        case 'Habitabilidad de un Edificio: Gestion del edificio':
            recolectarDatosGestionEdificio();
            break;
    }
}

/**Funciones de utileria */
function recogerRadioButton(nombreSeleccion){
    var length;
    for(var i=0,length = nombreSeleccion.length;i<length;i++){
        if(nombreSeleccion[i].checked){
            return nombreSeleccion[i].value;
        }
    }
}