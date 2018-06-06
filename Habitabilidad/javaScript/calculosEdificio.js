function recolectarDatos(){
    /*los exponentes son para posteriormente calcular que tanto afectan
      los fenomenos a los habitantes */
    var exponenteTrafico = document.getElementById("toleranciaMascotas");
    var importanciaTrafico =encontrarSeleccion(exponenteTrafico);
    alert(importanciaTrafico);
}


/*Funcion que permite encontrar la seleccion del radioButton*/
function encontrarSeleccion(exponente){
    for(var i=0;i<exponente.length;i++){
        if(exponente[i].checked){
            return exponente[i].value;
        }
    }
}