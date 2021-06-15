const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        //console.log('sign out OK')
    })
})

function callAlarms() {
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: { api_fills: 'get_alarm_notification' },
        success: function (data) {
            console.log(data);
            //var data = JSON.parse(response)
            var lista = document.getElementById("alertList");
            document.getElementById("numAlerts").innerText = data.alarmList.length;
            lista.innerHTML = "";
            for (var n in data.alarmList) {
                var mensaje = document.createElement("li");
                mensaje.innerHTML = '<a href="javascript:void(0)" class="nav-item dropdown-item">' + data.alarmList[n].alarmasNombre + '</a>';
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

function initApp() {
    // Listening for auth state changes.
    
    firebase.auth().onAuthStateChanged(
        function (user) {
            if (!user) {
                localStorage.setItem("User", "");
                location.href = 'index.html';
            }
        });

        document.getElementById("userName").innerText = localStorage.getItem("User");
    //setInterval(function(){
    callAlarms();
    //}, 1000);
}

window.onload = function () {
    initApp();
};