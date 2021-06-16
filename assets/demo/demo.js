//type = ['primary', 'info', 'success', 'warning', 'danger'];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
$(document).ready(function () {
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    var firstDataDB = '2021-05-15';
    ajaxFillOperation(firstDataDB, today);
    ajaxIncidentOperation(firstDataDB, today);
});

$(document).ready(function ()
{
    $("#search_fills_button").click(function ()
    {
        var startDateValue = $("#startDateValue").val();
        var endDateValue = $("#endDateValue").val();

        var difference = (Date.parse(endDateValue) - Date.parse(startDateValue)) / (86400000 * 7);
        if (difference < 0) {
            alertify.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
        } else
        {
            var dateStart = new Date(startDateValue);
            var dateEnd = new Date(startDateValue);
            var monthNumberStart = dateStart.getMonth();
            var monthEnd = dateEnd.getMonth();
            
            document.getElementById("dateSelectedTemp").innerHTML = months[monthNumberStart] + " - " + months[monthEnd];
            document.getElementById("dateSelectedPres").innerHTML = months[monthNumberStart] + " - " + months[monthEnd];
            document.getElementById("dateSelectedPer").innerHTML = months[monthNumberStart] + " - " + months[monthEnd];
            ajaxFillOperation(startDateValue, endDateValue);
        }
    });
});


gradientChartOptionsConfigurationWithTooltipBlue = {
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
                    suggestedMin: 60,
                    suggestedMax: 125,
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
                    padding: 20,
                    fontColor: "#2380f7"
                }
            }]
    }
};

gradientChartOptionsConfigurationWithTooltipPurple = {
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
                    suggestedMin: 60,
                    suggestedMax: 125,
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
                    padding: 20,
                    fontColor: "#9a9a9a"
                }
            }]
    }
};

gradientChartOptionsConfigurationWithTooltipOrange = {
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
                    suggestedMin: 50,
                    suggestedMax: 110,
                    padding: 20,
                    fontColor: "#ff8a76"
                }
            }],

        xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(220,53,69,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#ff8a76"
                }
            }]
    }
};

gradientChartOptionsConfigurationWithTooltipGreen = {
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
                    suggestedMin: 50,
                    suggestedMax: 125,
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
                    padding: 20,
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
            display: true,
            text: 'Chart.js Doughnut Chart'
        }
    }
};

gradientBarChartConfiguration = {
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

                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    suggestedMin: 60,
                    suggestedMax: 120,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
            }],

        xAxes: [{

                gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
            }]
    }
};


function ajaxFillOperation(startDay, endDay)
{
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_fill_interval', startDate: startDay, endDate: endDay},
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

                var i;
                for (i in obj.fillsInterval)
                {
                    datesFills.push(obj.fillsInterval[i].fecha);
                    percentageFills.push(obj.fillsInterval[i].porcentaje);
                    presionFills.push(obj.fillsInterval[i].presion);
                    temperatureFills.push(obj.fillsInterval[i].temperatura);
                }
                /**************Temperatura Chart***************/
                var ctx = document.getElementById("chartLinePurple").getContext("2d");

                var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
                gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
                gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

                var data = {
                    labels: datesFills,
                    datasets: [{
                            label: "*",
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: '#d048b6',
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: '#d048b6',
                            pointBorderColor: 'rgba(255,255,255,0)',
                            pointHoverBackgroundColor: '#d048b6',
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: temperatureFills,
                        }]
                };

                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: gradientChartOptionsConfigurationWithTooltipPurple
                });

                /**************Fin Temperatura Chart***************/

                /**************Presion Chart***************/
                var ctxGreen = document.getElementById("chartLineBlue").getContext("2d");

                var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
                gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
                gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

                var data = {
                    labels: datesFills,
                    datasets: [{
                            label: "Info.",
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: '#0ea5c4',
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: '#0ea5c4',
                            pointBorderColor: 'rgba(255,255,255,0)',
                            pointHoverBackgroundColor: '#0ea5c4',
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: presionFills,
                        }]
                };

                var myChart = new Chart(ctxGreen, {
                    type: 'line',
                    data: data,
                    options: gradientChartOptionsConfigurationWithTooltipBlue

                });
                /**************Fin Presion Chart***************/


                /**************Porcentaje Chart***************/
                var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

                var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
                gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
                gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

                var data = {
                    labels: datesFills,
                    datasets: [{
                            label: "Info.",
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: '#00d6b4',
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: '#00d6b4',
                            pointBorderColor: 'rgba(255,255,255,0)',
                            pointHoverBackgroundColor: '#00d6b4',
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: percentageFills,
                        }]
                };

                var myChart = new Chart(ctxGreen, {
                    type: 'line',
                    data: data,
                    options: gradientChartOptionsConfigurationWithTooltipGreen

                });
                /**************Fin Porcentaje Chart***************/
            }
        }
    });
}

function ajaxIncidentOperation(startDay, endDay) {
    /* Llamada para obtener datos de alarmas por grupos (para grafica de dona) */
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_alarm_groups', startDate: startDay, endDate: endDay},
        success: function (obj)
        {
            if (!obj.error && !jQuery.isEmptyObject(obj.alarmGroups))
            {
                var nombres = [];
                var totales = [];

                var i;
                for (i in obj.alarmGroups)
                {
                    nombres.push(obj.alarmGroups[i].nombre);
                    totales.push(obj.alarmGroups[i].total);
                }

                /************************Doughnut Chart****************/
                var ctxDoughnut = document.getElementById("chartDoughnut").getContext("2d");

                var data = {
                    labels: nombres /*['INC.', 'INC.2', 'INC.3', 'INC.4', 'INC.5']*/,
                    datasets: [{
                            label: "Incidencias",
                            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', "#a3c7c9"],
                            data: totales /*[10, 20, 30, 15, 25]*/
                        }]
                };

                var myChart = new Chart(ctxDoughnut, {
                    type: 'doughnut',
                    data: data,
                    options: gradientDoughnut,
                    responsive: true,
                });

                /****************Final Doughnut Chart****************************/
            } else
            {
                if (jQuery.isEmptyObject(obj.alarmGroups))
                {
                    alertify.error('Seleccione otra fecha');
                } else
                {

                }
            }
        }
    });

    /* Llamada para obtener datos de alarmas (para la lista)  */
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_alarm_list', startDate: startDay, endDate: endDay},
        success: function (obj)
        {
            if (!obj.error && !jQuery.isEmptyObject(obj.alarmList))
            {
                var table = document.getElementById("tbody");
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
                if (jQuery.isEmptyObject(obj.alarmList))
                {
                    alertify.error('La consulta no regresa datos');
                } else
                {

                }
            }
        }
    });
<<<<<<< HEAD
}
=======

    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: { api_fills: 'get_alarm_notification' },
        success: function (data) {
            var lista = document.getElementById("alertList");
            //lista.className = "list-group";
            console.log("first reload");
            document.getElementById("numAlerts").innerText = data.notification.length;
            lista.innerHTML = "";
            for (var n in data.notification) {
                var mensaje = document.createElement("li");
                mensaje.className = "list-group-item d-flex justify-content-between align-items-center";
                mensaje.innerHTML = '<a href="javascript:void(0)" class="nav-item dropdown-item">' + 
                data.notification[n].alarmaTipo + '</a><span class="badge badge-success badge-pill">new</span>';
                lista.appendChild(mensaje);
            }
        },
        error: function (response, status, error) {
            document.getElementById("alertList").innerHTML =
                '<li class="nav-link"><a href="#" class="nav-item dropdown-item">No hay conexión</a></li>';
            document.getElementById("numAlerts").innerText = 1;
        }
    });
    setInterval(function(){

        jQuery.ajax({
            type: "GET",
            url: 'api_fills.php',
            dataType: 'json',
            data: { api_fills: 'get_alarm_notification' },
            success: function (data) {
                var lista = document.getElementById("alertList");
                //lista.className = "list-group";
                console.log("reloaded");
                document.getElementById("numAlerts").innerText = data.notification.length;
                lista.innerHTML = "";
                for (var n in data.notification) {
                    var mensaje = document.createElement("li");
                    mensaje.className = "list-group-item d-flex justify-content-between align-items-center";
                    mensaje.innerHTML = '<a href="javascript:void(0)" class="nav-item dropdown-item">' + 
                    data.notification[n].alarmaTipo + '</a><span class="badge badge-success badge-pill">new</span>';
                    lista.appendChild(mensaje);
                }
            },
            error: function (response, status, error) {
                document.getElementById("alertList").innerHTML =
                    '<li class="nav-link"><a href="#" class="nav-item dropdown-item">No hay conexión</a></li>';
                document.getElementById("numAlerts").innerText = 1;
            }
        });
        
    },5000)
        var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];


        var ctx = document.getElementById("chartBig1").getContext('2d');

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "My First dataset",
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
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };
        var myChartData = new Chart(ctx, config);
        $("#0").click(function () {
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });
        $("#1").click(function () {
            var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });

        $("#2").click(function () {
            var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });


        var ctx = document.getElementById("CountryChart").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


        var myChart = new Chart(ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                    label: "Countries",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: '#1f8ef1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [53, 20, 10, 80, 100, 45],
                }]
            },
            options: gradientBarChartConfiguration
        });

    },


    showNotification: function (from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "tim-icons icon-bell-55",
            message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    }

};

  var gauge1 = Gauge(
    document.getElementById("guageTemperature"),
    {
      max: 100,
      dialStartAngle: -90,
      dialEndAngle: -90.001,
      value: 10,
      label: "12"
    }
  );
>>>>>>> 901ab24bbad02d1090e7bdaff0670afef299551b
