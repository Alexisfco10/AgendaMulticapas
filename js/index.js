function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php").then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        x=null;
        var divContacto = document.getElementById("contactos");
        var contacto = respuesta[0];

        for (var contacto in contacto) {
            divContacto.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono + "<br>"
        }
    })
}


function crearContacto(){
    var nombreNuevo = document.getElementById("nombre").value;
    var apellidoNuevo = document.getElementById("apellido").value;
    var telefonoNuevo = document.getElementById("telefono").value;

    
    fetch("http://www.raydelto.org/agenda.php", 
    {
     method:'POST', 
     body:JSON.stringify({
        nombre:nombreNuevo,
        apellido:apellidoNuevo,
        telefono:telefonoNuevo
     })
    }
    )
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(resultado){
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = "<p>El contacto fue agregado con éxito<p>"
    })
}