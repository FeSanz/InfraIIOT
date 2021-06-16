$(document).ready(function() {

    setInterval(function() { 
        jQuery.ajax({
            type: "GET",
            url: 'api_notificaciones.php',
            dataType: 'json',
            data: {api_notificaciones: 'get_notificaciones'},
            success: function (response)
            { 
                document.getElementById("notifi").innerHTML = ""; 

                console.log(response.notificaciones);
                for (var notificacion of response.notificaciones) 
                {
                    var text =  notificacion.nombre_equipo + " " + notificacion.nombre_alarma + " " + notificacion.fecha;
                    document.getElementById("notifi").innerHTML += '  <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">' + text  +'</a></li>'
                }
                
            
            }
        }), 10*1000 
    });
});

function NotifiacationView(id){

    jQuery.ajax({
        type: "POST",
        url: 'api_notificaciones.php',
        dataType: 'json',
        data: {notification_view: 'view', ID: id},
        success: function (response)
        { 
            console.log(response.status);
        }
    })

}
