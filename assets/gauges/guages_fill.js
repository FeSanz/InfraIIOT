    jQuery.ajax({
            type: "GET",
            url: 'api_fills.php',
            dataType: 'json',
            data: {api_fills: 'get_fill_interval', startDate: '2019-03-15', endDate: today},
            success: function (obj)
            { 
                /*********Gauge temperatura**************/
                var chart = am4core.create("gauge_temperature", am4charts.PieChart);

                // Add data
                chart.data = [{
                        "country": "Llenado",
                        "value": 50
                    }, {
                        "country": "Vacio",
                        "value": 50

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
                label.text = "10%";
                label.horizontalCenter = "middle";
                label.verticalCenter = "middle";
                label.fontSize = 20;


                /*********Gauge presión**************/
                var chart = am4core.create("gauge_presion", am4charts.PieChart);

                // Add data
                chart.data = [{
                        "country": "Llenado",
                        "value": 50
                    }, {
                        "country": "Vacio",
                        "value": 50

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
                label.text = "10%";
                label.horizontalCenter = "middle";
                label.verticalCenter = "middle";
                label.fontSize = 20;


                /*********Gauge porcentaje**************/
                var chart = am4core.create("gauge_percentage", am4charts.PieChart);

                // Add data
                chart.data = [{
                        "country": "Llenado",
                        "value": 50
                    }, {
                        "country": "Vacio",
                        "value": 50

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
                label.text = "10%";
                label.horizontalCenter = "middle";
                label.verticalCenter = "middle";
                label.fontSize = 20;
            }
        });



