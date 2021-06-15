google.charts.load('current', {'packages': ['gauge']});
google.charts.setOnLoadCallback(drawChartGuage);

function drawChartGuage()
{
    jQuery.ajax({
        type: "GET",
        url: 'api_fills.php',
        dataType: 'json',
        data: {api_fills: 'get_alarm_notification'},
        success: function (obj)
        {
            if (!obj.error)
            {
                var data = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Porcentaje', 45]
                ]);

                var options = {
                    width: 100, height: 220,
                    greenFrom: 50, greenTo: 100,
                    yellowFrom: 35, yellowTo: 50,
                    redFrom: 0, redTo: 35,
                    minorTicks: 5
                };

                var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

                chart.draw(data, options);
            } else
            {
                //document.getElementById("debugTextManometer").innerHTML = "Error en la consulta";
            }
            
        }
    });

    setTimeout(function(){ drawChartGuage(); }, 3000);
}