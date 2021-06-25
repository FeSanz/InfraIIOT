var numeroNotificaciones = 0;
function GetNotifications(){
    
    jQuery.ajax({
        type: "GET",
        url: 'api_notificaciones.php',
        dataType: 'json',
        data: {api_notificaciones: 'get_alarms_number'},
        success: function (response)
        { 
            if(response.number[0].number!=numeroNotificaciones){
                GetAllNotifications();
            }
        }
    })
}
function GetAllNotifications(){
    jQuery.ajax({
        type: "GET",
        url: 'api_notificaciones.php',
        dataType: 'json',
        data: { api_notificaciones: 'get_alarm_notification'},
        success: function (data) {
            console.log("Hemos cargado todas las notificaciones");
            var lista = document.getElementById("alertList");
            //lista.className = "list-group";
            document.getElementById("numAlerts").innerText = data.notification.length;
            lista.innerHTML = "";
            numeroNotificaciones = data.notification.length;
            if(!data.notification.length){
                lista.innerHTML =
                    '<li class="nav-link"><a href="#" class="nav-item dropdown-item">No hay notificaciones</a></li>';
            }
            for (var n in data.notification) {
                var mensaje = document.createElement("li");
                mensaje.className = "list-group-item d-flex justify-content-between align-items-center";
                mensaje.innerHTML = '<a href="javascript:void(0)" class="nav-item dropdown-item"'+
                   'onclick="NotifiacationView(\''+data.notification[n].id+'\','+
                   '\''+data.notification[n].alarmaTipo+'\','+
                   '\''+data.notification[n].fecha+'\','+
                   '\''+data.notification[n].nombreEquipo+'\','+
                   ')">' + 
                data.notification[n].alarmaTipo + '</a><span class="badge badge-danger badge-pill">new</span>';
                lista.appendChild(mensaje);
            }
        },
        error: function (response, status, error) {
            document.getElementById("alertList").innerHTML =
                '<li class="nav-link"><a href="#" class="nav-item dropdown-item">No hay conexión</a></li>';
            document.getElementById("numAlerts").innerText = 1;
        }
    });
}
function NotifiacationView(id, alarma, fecha, equipo){
    document.getElementById('tituloAlerta').innerText = alarma;
    document.getElementById('informacionModalAlerta').innerHTML = "Fecha: <strong>"+fecha+"</strong>"+
    "<br/>Equipo registrado: <strong>" + equipo+"</strong>";
    $('#AlertModalNotification').modal('show')

    jQuery.ajax({
        type: "POST",
        url: 'api_notificaciones.php',
        dataType: 'json',
        data: {notification_view: 'view', ID: id},
        success: function (response)
        { 
            //console.log(response.status);
            GetNotifications();
        }
    })

}
