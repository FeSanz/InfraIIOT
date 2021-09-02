//type = ['primary', 'info', 'success', 'warning', 'danger'];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
var idEquipSelected = 1;

$(document).ready(function () {
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    //Para obtener los datos del mes actual solamente
    today = yyyy + '-' + mm + '-' + dd;
    var firstDataDB = yyyy + '-' + mm + '-' + '01';

    function getNameURLWeb(){
        var sPath = window.location.pathname;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        return sPage;
    }

    //Para obtener los datos de la página actual solamente
    if (getNameURLWeb() === "incidents_view.php")
    {
        //Obtenemos una referencia a los campos de fecha
        const startDateInput = document.getElementById('startDateValue');
        const endDateInput = document.getElementById('endDateValue');
         
        //Bloquea pegado en inputs
        startDateInput.onpaste = e => e.preventDefault();
        endDateInput.onpaste = e => e.preventDefault();

        //Ponemos las fechas en los campos de busqueda
        document.getElementById("startDateValue").value = firstDataDB;
        document.getElementById("endDateValue").value = today;
        
        ajaxIncidentOperation(firstDataDB, today, idEquipSelected);
    }

    if (getNameURLWeb() === "product_view.php")
    {
         const startDateInput = document.getElementById('startDateValue');
         const endDateInput = document.getElementById('endDateValue');
         //Bloquea pegado en inputs
         startDateInput.onpaste = e => e.preventDefault();
         endDateInput.onpaste = e => e.preventDefault();

        document.getElementById("startDateValue").value = firstDataDB;
        document.getElementById("endDateValue").value = today;
        
        MonthValue(firstDataDB, today);
        ajaxFillOperation(firstDataDB, today, idEquipSelected);
    }

});

//Funcion para verificar notofocaciones
$(document).ready(function () {
    GetNotifications();
    setInterval(function(){
        GetNotifications();
    },5000);
});

//Seleccionar equipo para desplegar datos
$("#eq01").click(function() {
    idEquipSelected = 1;
    ChangeEquipment(1);
  });
$("#eq02").click(function() {
    idEquipSelected = 2;
    ChangeEquipment(2);
  });
$("#eq03").click(function() {
    idEquipSelected = 3;
    ChangeEquipment(3);
  });
$("#eq04").click(function() {
    idEquipSelected = 4;
    ChangeEquipment(4);
  });
$("#eq05").click(function() {
    idEquipSelected = 5;
   ChangeEquipment(5);
  });
  
function ChangeEquipment(idSelected)
{
    document.getElementById("equipName").innerHTML = "Equipo " + idSelected;
    alertify.success("Equipo " + idSelected );
}

/*Obtiene el intervalo de meses consultados*/
function MonthValue(startDate, endDate)
{
    var dateStart = new Date(startDate);
    var dateEnd = new Date(endDate);
    var monthNumberStart = dateStart.getMonth();
    var monthNumberEnd = dateEnd.getMonth();

    document.getElementById("dateSelectedTemp").innerHTML = months[monthNumberStart] + " - " + months[monthNumberEnd];
    document.getElementById("dateSelectedPres").innerHTML = months[monthNumberStart] + " - " + months[monthNumberEnd];
    document.getElementById("dateSelectedPer").innerHTML = months[monthNumberStart] + " - " + months[monthNumberEnd];
}

/* Valida que solo se escriban numeros y "-" en los campos de fecha*/
function validateKeypress() {
    /*
        var alpha = /[ A-Za-z]/;
        var numeric = /[0-9]/; 
        var alphanumeric = /[ A-Za-z0-9]/;
     */
    var dateKey =  /[0-9]/;
    var keyChar = String.fromCharCode(event.which || event.keyCode);
    return dateKey.test(keyChar) ? keyChar : false;
}

/* True -> Si la fecha tiene el formato adecuado yyyy-mm-dd || False -> Si la fecha esta escrita mal*/
function isValidDate(dateString)
{
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx))// Formato invalido
  {
      return false; 
  }
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0)  // NaN value, Fecha invalida
  {
      return false;
  }
  return d.toISOString().slice(0,10) === dateString;
}

//Button - Función para filtrar llenados por fechas
$(document).ready(function ()
{
    if(sessionStorage.getItem('User')===""){
        location.href = 'index.html';
        return;
    }
    $(".loader").fadeOut("slow");
    $("#search_fills_button").click(function ()
    {
        var startDateValue = $("#startDateValue").val();
        var endDateValue = $("#endDateValue").val();
        if (isValidDate(startDateValue) && isValidDate(endDateValue))
        {
            var difference = (Date.parse(endDateValue) - Date.parse(startDateValue)) / (86400000 * 7);
            if (difference < 0) {
                alertify.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
            } else
            {
                MonthValue(startDateValue, endDateValue);
                ajaxFillOperation(startDateValue, endDateValue, idEquipSelected);
            }
        }
        else
        {
            alertify.error("Formato de fecha incorrecto. Verifique yyyy-mm-dd")
        }
    });
});

//Button - Función para filtrar alarmas por fecha
$(document).ready(function ()
{
    $("#search_alarms_button").click(function ()
    {
        var startDateValue = $("#startDateValue").val();
        var endDateValue = $("#endDateValue").val();
        
        if (isValidDate(startDateValue) && isValidDate(endDateValue))
        {
            var difference = (Date.parse(endDateValue) - Date.parse(startDateValue)) / (86400000 * 7);
            if (difference < 0) {
                alertify.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
            } else
            {
                ajaxIncidentOperation(startDateValue, endDateValue, idEquipSelected);
            }
        }
        else
        {
            alertify.error("Formato de fecha incorrecto. Verifique yyyy-mm-dd")
        }
    });
});

gradientChartTemperature = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.0)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    suggestedMin: 10,
                    suggestedMax: 60,
                    padding: 20,
                    fontColor: "#9a9a9a"
                }
            }],

        xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(225,78,202,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    display: false,
                    padding: 10,
                    fontColor: "#9a9a9a"
                }
            }]
    }
};

gradientChartPressure = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.0)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    suggestedMin: 10,
                    suggestedMax: 3200,
                    padding: 20,
                    fontColor: "#2380f7"
                }
            }],

        xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    display: false,
                    padding: 10,
                    fontColor: "#2380f7"
                }
            }]
    }
};

gradientChartPercentage = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.0)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    suggestedMin: 10,
                    suggestedMax: 100,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
            }],

        xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(0,242,195,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    display: false,
                    padding: 10,
                    fontColor: "#9e9e9e"
                }
            }]
    }
};

gradientDoughnut = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false, //true,
            text: 'Chart.js Doughnut Chart'
        }
    }
};


function ajaxFillOperation(startDay, endDay, idEquipo)
{                
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_fill_interval', startDate: startDay, endDate: endDay, idEquipo: idEquipo},
        success: function (obj)
        {
            if (!obj.error && jQuery.isEmptyObject(obj.fillsInterval))
            {
                alertify.error('Sin registros. Seleccione otra fecha');

            } else
            {
                var datesFills = [];
                var temperatureFills = [];
                var presionFills = [];
                var percentageFills = [];
                
                var temperatureMaxMin = [];
                var presionMaxMin = [];
                var percentageMaxMin = [];
          
                var i;
                var totalTemperature = 0;
                var totalPressure = 0;
                var totalPercentage = 0;
                
                var countData = 0;
                
                var tempDate = dateSplit(obj.fillsInterval[0].fecha);
                for (i in obj.fillsInterval)
                {
                    temperatureMaxMin.push(obj.fillsInterval[i].temperatura);
                    presionMaxMin.push(obj.fillsInterval[i].presion);
                    percentageMaxMin.push(obj.fillsInterval[i].porcentaje);
                    
                    
                    var rowDate = dateSplit(obj.fillsInterval[i].fecha);
                    if(rowDate === tempDate)
                    { 
                      totalTemperature += obj.fillsInterval[i].temperatura;
                      totalPressure += obj.fillsInterval[i].presion;
                      totalPercentage += obj.fillsInterval[i].porcentaje;
                      
                      countData += 1;
                    }
                    else
                    {
                        temperatureFills.push(Math.round(totalTemperature / countData));
                        presionFills.push(Math.round(totalPressure / countData));
                        percentageFills.push(Math.round(totalPercentage / countData));
                    
                        datesFills.push(dateSplit(obj.fillsInterval[i-1].fecha));
                        
                        totalTemperature = 0;
                        totalPressure = 0;
                        totalPercentage = 0;
                        
                        totalTemperature += obj.fillsInterval[i].temperatura;
                        totalPressure += obj.fillsInterval[i].presion;
                        totalPercentage += obj.fillsInterval[i].porcentaje;
                        
                        countData = 1;
                        tempDate = dateSplit(obj.fillsInterval[i].fecha);
                    }
                }
                
                if(countData !== 0)
                {
                    temperatureFills.push(Math.round(totalTemperature / countData));
                    presionFills.push(Math.round(totalPressure / countData));
                    percentageFills.push(Math.round(totalPercentage / countData));
                    datesFills.push(dateSplit(obj.fillsInterval[obj.fillsInterval.length-1].fecha));
                }
                
                document.getElementById("minTemperature").innerHTML = "Min. " + Math.min.apply(Math, temperatureMaxMin);
                document.getElementById("minPressure").innerHTML = "Min. " + Math.min.apply(Math, presionMaxMin);
                document.getElementById("minPercentage").innerHTML = "Min. " + Math.min.apply(Math, percentageMaxMin);
                
                document.getElementById("maxTemperature").innerHTML = "Máx. " + Math.max.apply(Math, temperatureMaxMin);
                document.getElementById("maxPressure").innerHTML = "Máx. " + Math.max.apply(Math, presionMaxMin);
                document.getElementById("maxPercentage").innerHTML = "Máx. " + Math.max.apply(Math, percentageMaxMin);
               
                //***********Char temperatura******************
                var ctxTemperature = document.getElementById("chartBigTemperature").getContext('2d');

                var gradientStroke = ctxTemperature.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
                gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
                gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
                
                var data = {
                    labels: datesFills,
                    datasets: [{
                      label: "Temperatura",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: '#09a6ee',
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: '#09a6ee',
                      pointBorderColor: 'rgba(255,255,255,0)',
                      pointHoverBackgroundColor: '#09a6ee',
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: temperatureFills,
                    }]
                  };
                
                 var temperatureChart = new Chart(ctxTemperature, {
                    type: 'line',
                     scrollablePlotArea: {
                        minWidth: 1200,
                        scrollPositionX: 1
                      },
                    data: data,
                    options: gradientChartTemperature
                });
               
                
                //***********Char presión******************
                var ctxPressure = document.getElementById("chartBigPressure").getContext('2d');

                var gradientStroke = ctxPressure.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
                gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
                gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
                
                var data = {
                    labels: datesFills,
                    datasets: [{
                      label: "Presión",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: '#d346b1',
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: '#d346b1',
                      pointBorderColor: 'rgba(255,255,255,0)',
                      pointHoverBackgroundColor: '#d346b1',
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: presionFills,
                    }]
                  };
                
                 var pressureChart = new Chart(ctxPressure, {
                    type: 'line',
                    data: data,
                    options: gradientChartPressure
                });
                
                 //***********Char porcentaje******************
                var ctxPercentage = document.getElementById("chartBigPercentage").getContext('2d');

                var gradientStroke = ctxPercentage.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
                gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
                gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
                
                var data = {
                    labels: datesFills,
                    datasets: [{
                      label: "Pocentaje",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: '#1be3c1',
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: '#1be3c1',
                      pointBorderColor: 'rgba(255,255,255,0)',
                      pointHoverBackgroundColor: '#1be3c1',
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: percentageFills,
                    }]
                  };
                
                 var percentageChart = new Chart(ctxPercentage, {
                    type: 'line',
                    data: data,
                    options: gradientChartPercentage
                });
                
                temperatureChart.update();
                pressureChart.update();
                percentageChart.update();
            }
        }
    });
}

function dateSplit(date)
{
    var dateSplit = date.split(" ");
    return dateSplit[0];
}

var myChart;

function ajaxIncidentOperation(startDay, endDay, idEquipo) {
    /* Llamada para obtener datos de alarmas por grupos (para grafica de dona) */
    jQuery.ajax({
        type: "GET",
        url: 'api_alarms.php',
        dataType: 'json',
        data: {api_alarms: 'get_alarm_groups', startDate: startDay, endDate: endDay, idEquipo: idEquipo},
        success: function (obj)
        {
            //var myChart;
            var meses = document.getElementById("dateSelectedGroups");
            var ctxDoughnut = document.getElementById("chartDoughnut").getContext("2d");

            if (!obj.error && !jQuery.isEmptyObject(obj.alarmGroups))
            {
                var nombres = [];
                var totales = [];

                var i;
                var totalAlarmas = 0;
                for (i in obj.alarmGroups)
                {
                    nombres.push(obj.alarmGroups[i].nombre);
                    totales.push(obj.alarmGroups[i].total);
                    totalAlarmas = totalAlarmas + obj.alarmGroups[i].total;
                }

                //Obtenemos los nombres de los meses para escribirlos junto con el total
                meses.innerHTML = months[parseInt(startDay.substring(5,7)-1)] + " - " + 
                                months[parseInt(endDay.substring(5,7))-1] + "  Total: " + 
                                totalAlarmas;
                
                /************************Doughnut Chart****************/                
                var data = {
                    labels: nombres /*['INC.', 'INC.2', 'INC.3', 'INC.4', 'INC.5']*/,
                    datasets: [{
                            label: "Incidencias",
                            backgroundColor: [
                                '#4dc9f6',
                                '#f67019',
                                '#f53794',
                                '#537bc4',
                                '#acc236',
                                '#166a8f',
                                '#00a950',
                                '#58595b',
                                '#8549ba',
                                '#c0392b',
                                '#9b59b6',
                                '#2980b9',
                                '#1abc9c',
                                '#d35400',
                                '#2e4053',
                                '#6d1f35' 
                              ],
                            data: totales /*[10, 20, 30, 15, 25]*/
                        }]
                };

                //Para evitar el bug que mostraba la gráfica anterior bajo la nueva
                if (myChart != null)
                {
                    myChart.destroy();
                }
                
                myChart = new Chart(ctxDoughnut, {
                    type: 'pie',
                    data: data,
                    options: gradientDoughnut,
                    responsive: true,
                });

                /****************Final Doughnut Chart****************************/
            } 
            else
            {
                //Si no se obtuvieron datos
                if (jQuery.isEmptyObject(obj.alarmGroups))
                {
                    //Ya se manda el mensaje en la función que llena la tabla
                    //alertify.error('Sin registros. Seleccione otra fecha');

                    // Se borra la gráfica
                    myChart.destroy();

                    //Se limpia el mensaje de los meses
                    document.getElementById("dateSelectedGroups").innerHTML = "";
                }
            }
        }
    });

    /* Llamada para obtener datos de alarmas (para la lista)  */
    jQuery.ajax({
        type: "GET",
        url: 'api_alarms.php',
        dataType: 'json',
        data: {api_alarms: 'get_alarm_list', startDate: startDay, endDate: endDay, idEquipo: idEquipo},
        success: function (obj)
        {
            var table = document.getElementById("tbody");

            if (!obj.error && !jQuery.isEmptyObject(obj.alarmList))
            {
                //Primero se tiene que limpiar la tabla para no añadirle las lineas
                table.innerHTML = "";

                //Se insertan las lineas generadas
                var str = "";
                var i;
                for (i in obj.alarmList)
                {
                    str = '<tr>' +
                            '<td>' + obj.alarmList[i].fecha + '</td>' +
                            '<td>' + obj.alarmList[i].alarmasNombre + '</td>' +
                            '<td>' + obj.alarmList[i].equiposNombre + '</td>' +
                            '</tr>';
                    table.insertRow(-1).innerHTML = str;
                }
            } else
            {
                //Si no obtuvimos resultados limpiamos la tabla
                if (jQuery.isEmptyObject(obj.alarmList))    //Esto se puede meter en un variable bool y hacer solo una vez el llamado a la funcion
                {
                    table.innerHTML = "";
                    alertify.error('Sin registros. Seleccione otra fecha');
                } 
            }
        }
    });
}
