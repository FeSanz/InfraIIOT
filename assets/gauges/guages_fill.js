var tempTemperature = 0;
var tempPressure = 0;
var tempPercentage = 0;
function getFillsGauges(idEquipo) {

    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_current_fill', idEquipo: idEquipo},
        success: function (obj)
        {
            document.getElementById("message").innerHTML = " ";
            if (!obj.error && !jQuery.isEmptyObject(obj.currentFill))
            {
                if (tempTemperature !== obj.currentFill[0].temperatura ||
                        tempPressure !== obj.currentFill[0].presion ||
                        tempPercentage !== obj.currentFill[0].porcentaje) {
                    
                    tempTemperature = obj.currentFill[0].temperatura;
                    tempPressure = obj.currentFill[0].presion;
                    tempPercentage = obj.currentFill[0].porcentaje;
                    buildGauges(
                            obj.currentFill[0].temperatura,
                            obj.currentFill[0].presion,
                            obj.currentFill[0].porcentaje);
                }
            } else
            {
                if (jQuery.isEmptyObject(obj.currentFill))
                {
                    document.getElementById("message").innerHTML = "Sin datos del equipo";
                }
            }
        }
    });
}

function buildGauges(temperature, pressure, percentage)
{
    //54°C temperatura maxima 
    //3200 PSI presion maxima
    var tempVal = Math.round(((temperature * 100) / 54) * 10) / 10;
    var presVal = Math.round(((pressure * 100) / 3200) * 10) / 10;
    /*********Gauge temperatura**************/
    var chart = am4core.create("gauge_temperature", am4charts.PieChart);

    // Add data
    chart.data = [{
            "country": "Temperatura",
            "value": tempVal
        }, {
            "country": "Restante",
            "value": 100 - tempVal

        }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    //chart.legend = new am4charts.Legend();
    //chart.legend.position = "right";

    chart.innerRadius = am4core.percent(70);

    var label = pieSeries.createChild(am4core.Label);
    label.text = temperature.toString() + " °C";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;


    /*********Gauge presión**************/
    var chart = am4core.create("gauge_presion", am4charts.PieChart);

    // Add data
    chart.data = [{
            "country": "Presión",
            "value": presVal
        }, {
            "country": "Restante",
            "value": 100 - presVal

        }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    //chart.legend = new am4charts.Legend();
    //chart.legend.position = "right";

    chart.innerRadius = am4core.percent(70);

    var label = pieSeries.createChild(am4core.Label);
    label.text = pressure.toString() + " PSI";
    ;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;


    /*********Gauge porcentaje**************/
    var chart = am4core.create("gauge_percentage", am4charts.PieChart);

    // Add data
    chart.data = [{
            "country": "Porcentaje",
            "value": percentage
        }, {
            "country": "Restante",
            "value": 100 - percentage

        }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    //chart.legend = new am4charts.Legend();
    //chart.legend.position = "right";

    chart.innerRadius = am4core.percent(70);

    var label = pieSeries.createChild(am4core.Label);
    label.text = percentage.toString() + " %";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;
}

$(document).ready(function () {
    buildGauges(0, 0, 0);
    getFillsGauges();
});

setInterval(
        function ()
        {
            getFillsGauges(idEquipSelected);
        }, 5000);
