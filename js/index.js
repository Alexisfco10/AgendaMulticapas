function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php", {method:'GET'}).then((respuesta) => respuesta.json())
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )
        
        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<p>${data[i].nombre} ${data[i].apellido} ${data[i].telefono}<p>`
            }
            document.getElementById("contactos").innerHTML = body
        }

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