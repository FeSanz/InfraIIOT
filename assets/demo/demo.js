const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
var idEquipSelected = 1;

$(document).ready(function () {
    var dt = new Date();
    
    var firstDataDB = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + '01';
    var today = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getUTCDate()).padStart(2, '0');;

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
        document.getElementById("dayValue").value = today;
        
        DayParse(today);
        IntervalDatesParse(firstDataDB, today);
        ajaxFillOperation(firstDataDB, today, idEquipSelected);
        fillsDay(today, idEquipSelected);
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
    alert("Se mostrarán solo datos del EQUIPO " + idEquipSelected);
    ChangeEquipment(1);
  });
$("#eq02").click(function() {
    idEquipSelected = 2;
    alert("Se mostrarán solo datos del EQUIPO " + idEquipSelected);
    ChangeEquipment(2);
  });
$("#eq03").click(function() {
    idEquipSelected = 3;
    alert("Se mostrarán solo datos del EQUIPO " + idEquipSelected);
    ChangeEquipment(3);
  });
$("#eq04").click(function() {
    idEquipSelected = 4;
    alert("Se mostrarán solo datos del EQUIPO " + idEquipSelected);
    ChangeEquipment(4);
  });
$("#eq05").click(function() {
    idEquipSelected = 5;
    alert("Se mostrarán solo datos del EQUIPO " + idEquipSelected);
   ChangeEquipment(5);
  });
  
function ChangeEquipment(idSelected)
{
    document.getElementById("equipNameGauge").innerHTML = "Equipo " + idSelected;
    //para charts por dia
    document.getElementById("equipNameTemp").innerHTML = " &nbsp;&nbsp;&nbsp;►&nbsp;Equipo " + idSelected;
    document.getElementById("equipNamePres").innerHTML = " &nbsp;&nbsp;&nbsp;►&nbsp;Equipo " + idSelected;
    document.getElementById("equipNamePerc").innerHTML = " &nbsp;&nbsp;&nbsp;►&nbsp;Equipo " + idSelected;
    //para chart con promedio
    document.getElementById("equipNameAver").innerHTML = "Equipo " + idSelected; 
    
    //document.getElementById("equipNameInc").innerHTML = "Equipo " + idSelected; 
    //document.getElementById("idEquipDonut").innerHTML = " &nbsp;►&nbsp Equipo " + idSelected; 
    //document.getElementById("idEquipTab").innerHTML = "&nbsp;&nbsp; &nbsp;►&nbsp;Equipo " + idSelected; 
}

/*Obtiene el intervalo de meses consultados*/
function DayParse(day)
{   
    var options = {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("daySelectedTemp").innerHTML = new Date(day).toLocaleDateString("es-ES", options);
    document.getElementById("daySelectedPres").innerHTML = new Date(day).toLocaleDateString("es-ES", options);
    document.getElementById("daySelectedPerc").innerHTML = new Date(day).toLocaleDateString("es-ES", options);
}

function IntervalDatesParse(start, end)
{
    var options = {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("daySelectedAverage").innerHTML = new Date(start).toLocaleDateString("es-ES", options) + " a " +
                                                                new Date(end).toLocaleDateString("es-ES", options);
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
                ajaxFillOperation(startDateValue, endDateValue, idEquipSelected);
            }
        }
        else
        {
            alertify.error("Formato de fecha incorrecto. Verifique yyyy-mm-dd")
        }
    });
    
    $("#day_fills_button").click(function ()
    {
        var dayValue = $("#dayValue").val();
        if (isValidDate(dayValue))
        {
            fillsDay(dayValue, idEquipSelected);
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

//gradientDoughnut = {
//    responsive: true,
//    plugins: {
//        legend: {
//            position: 'top',
//        },
//        title: {
//            display: false, //true,
//            text: 'Chart.js Doughnut Chart'
//        }
//    }
//};

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
                alertify.error('Sin registros. Elija otras fechas');

            } else
            {
                IntervalDatesParse(startDay, endDay);
                 
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
                
                chartFusionBarInterval(datesFills, temperatureFills, presionFills, percentageFills, 'fusionchart-average');
            }
        }
    });
}

function fillsDay(day, idEquipo)
{
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_fill_interval', startDate: day, endDate: day, idEquipo: idEquipo},
        success: function (obj)
        {
            if (!obj.error && jQuery.isEmptyObject(obj.fillsInterval))
            {
                alertify.error('Sin registros en el día seleccionado. Elija otra fecha');
            } 
            else
            {
                DayParse(day);
                var datesFills = [];
                var temperatureFills = [];
                var presionFills = [];
                var percentageFills = [];
          
                var i;
                for (i in obj.fillsInterval)
                {
                    datesFills.push(obj.fillsInterval[i].fecha);
                    
                    temperatureFills.push(obj.fillsInterval[i].temperatura);
                    presionFills.push(obj.fillsInterval[i].presion);
                    percentageFills.push(obj.fillsInterval[i].porcentaje);
                }
                
                document.getElementById("minTemperature").innerHTML = "Min. " + Math.min.apply(Math, temperatureFills);
                document.getElementById("minPressure").innerHTML = "Min. " + Math.min.apply(Math, presionFills);
                document.getElementById("minPercentage").innerHTML = "Min. " + Math.min.apply(Math, percentageFills);
                
                document.getElementById("maxTemperature").innerHTML = "Máx. " + Math.max.apply(Math, temperatureFills);
                document.getElementById("maxPressure").innerHTML = "Máx. " + Math.max.apply(Math, presionFills);
                document.getElementById("maxPercentage").innerHTML = "Máx. " + Math.max.apply(Math, percentageFills);
               
               
                chartFusionLineDay(datesFills, temperatureFills, 'fusionchart-temperature', '#09a6ee');
                chartFusionLineDay(datesFills, presionFills, 'fusionchart-pressure', '#d346b1');
                chartFusionLineDay(datesFills, percentageFills, 'fusionchart-percentage', '#1be3c1');
            }
        }
    });
}

function chartFusionLineDay(labels, datafills, idHTML, linecolor)
{
    var chart_labels = {category: []};
    var chart_data = {data: [] };

    for (var i = 0; i < datafills.length; i++)
    {
        chart_labels['category'].push({"label": labels[i].toString()});
        chart_data['data'].push({"value": datafills[i].toString()});
    }

    var categories = [chart_labels];
    var dataset = [chart_data];

    var chartObj = new FusionCharts({
        type: 'scrollline2d',
        dataFormat: 'json',
        renderAt: idHTML,
        width: '100%',
        height: '70%',
        dataSource: {
            chart: {
                theme: "fusion",
                bgColor: "#272A3D",
                scrollColor : "#6b6b6c",
                divLineColor: "#7d7d7d",
                baseFontColor: "#7d7d7d",
                //bgAlpha: "0,0",
                showLabels: "0",
                //caption: "Temperarura",
                //subCaption: "2021-05-09",
                //xAxisName: "Month",
                //yAxisName: "Revenue",
                //numberPrefix: "$",
                lineThickness: "3",
                lineColor: linecolor,
                flatScrollBars: "1",
                scrollheight: "10",
                numVisiblePlot: "12",
                showHoverEffect: "1"
            },
            categories: categories,
            dataset: dataset
        }
    });
    chartObj.render();
}

function chartFusionBarInterval(labels, temperature_data, pressure_data, percentage_data, idHTML)
{
    var chart_labels = {category: []};
    var chart_data_temp = {seriesname: "Temperatura", data: [] };
    var chart_data_pres = {seriesname: "Presión", data: [] };
    var chart_data_perc = {seriesname: "Porcentaje", data: [] };

    for (var i = 0; i < labels.length; i++)
    {
        chart_labels['category'].push({"label": labels[i].toString()});
        chart_data_temp['data'].push({"value": temperature_data[i].toString()});
        chart_data_pres['data'].push({"value": pressure_data[i].toString()});
        chart_data_perc['data'].push({"value": percentage_data[i].toString()});
    }

    var categories = [chart_labels];
    var dataset = [chart_data_temp, chart_data_pres, chart_data_perc];

    var chartObj = new FusionCharts({
        type: 'mscolumn2d',
        dataFormat: 'json',
        renderAt: idHTML,
        width: '100%',
        height: '70%',
        dataSource: {
            chart: {
                theme: "fusion",
                bgColor: "#272A3D",
                scrollColor : "#6b6b6c",
                baseFontColor: "#7d7d7d",
                formatnumberscale: "1",
                drawcrossline: "1",
                flatScrollBars: "1",
                scrollheight: "10",
                numVisiblePlot: "12",
                showHoverEffect: "1",
                scrollShowButtons: "0",
            },
            categories: categories,
            dataset: dataset
        }
    });
    chartObj.render();
}

function dateSplit(date)
{
    var dateSplit = date.split(" ");
    return dateSplit[0];
}

//var myChart;
function ajaxIncidentOperation(startDay, endDay, idEquipo) {
    /* Llamada para obtener datos de alarmas por grupos (para grafica de dona) */
    jQuery.ajax({
        type: "GET",
        url: 'api_alarms.php',
        dataType: 'json',
        data: {api_alarms: 'get_alarm_groups', startDate: startDay, endDate: endDay, idEquipo: idEquipo},
        success: function (obj)
        {
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
                
                var options = {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById("dateSelectedGroups").innerHTML = new Date(startDay).toLocaleDateString("es-ES", options) + " a " +
                                                                new Date(endDay).toLocaleDateString("es-ES", options);
                document.getElementById("totalIncidents").innerHTML = "  Total: " + totalAlarmas;;
                        
                chartFusionDonutIncidents(nombres, totales, 'chartdonut-indicidents');
                
                /************************Doughnut Chart****************/                
//                var data = {
//                    labels: nombres /*['INC.', 'INC.2', 'INC.3', 'INC.4', 'INC.5']*/,
//                    datasets: [{
//                            label: "Incidencias",
//                            backgroundColor: [
//                                '#4dc9f6',
//                                '#f67019',
//                                '#f53794',
//                                '#537bc4',
//                                '#acc236',
//                                '#166a8f',
//                                '#00a950',
//                                '#58595b',
//                                '#8549ba',
//                                '#c0392b',
//                                '#9b59b6',
//                                '#2980b9',
//                                '#1abc9c',
//                                '#d35400',
//                                '#2e4053',
//                                '#6d1f35' 
//                              ],
//                            data: totales /*[10, 20, 30, 15, 25]*/
//                        }]
//                };
//
//                //Para evitar el bug que mostraba la gráfica anterior bajo la nueva
//                if (myChart != null)
//                {
//                    myChart.destroy();
//                }
//                
//                myChart = new Chart(ctxDoughnut, {
//                    type: 'pie',
//                    data: data,
//                    options: gradientDoughnut,
//                    responsive: true,
//                });

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
                    //myChart.destroy();

                    //Se limpia el mensaje de los meses
                    document.getElementById("totalIncidents").innerHTML = "";
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
            var table = document.getElementById("content-incidents");

            if (!obj.error && !jQuery.isEmptyObject(obj.alarmList))
            {
                $('#dataTables-incidents').DataTable().clear().destroy();
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
                $('#dataTables-incidents').DataTable();
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

function chartFusionDonutIncidents(labels, dataincidents, idHTML)
{
    var dataset = {data: []};

    for (var i = 0; i < dataincidents.length; i++)
    {
        dataset['data'].push({label: labels[i].toString(), value: dataincidents[i].toString()});
    }
    var chartObj = new FusionCharts({
        type: 'doughnut2d',
        dataFormat: 'json',
        renderAt: idHTML,
        width: '100%',
        height: '85%',
        dataSource: {
            chart: {
                theme: "fusion",
                bgColor: "#272A3D",
                baseFontColor: "#7d7d7d",
                showLabels: "0",
                showpercentvalues: "1",
                //defaultcenterlabel: "Incidencias",
                centerLabelColor: "#7d7d7d",
                aligncaptionwithcanvas: "0",
                captionpadding: "0",
                decimals: "1",
                baseFontColor: "#7d7d7d",
                labelFontColor:"#7d7d7d"
            },
            data: dataset['data'] 
        }
    });
    chartObj.render();
}
