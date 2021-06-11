<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">
    <div class="row">
        <div class="col-12">
            <div class="card card-chart">
                <div class="card-header ">
                    <div class="row">
                        <div class="col-sm-6 text-left">
                            <h2 class="card-title">Estado actual</h2>
                        </div>
                    </div>
                </div>

                <div class="row" style="height: 16em;">
                    <div class="col-lg-4">
                         <h5 class="card-category"> Temperatura</h5>
                         <div id="guageTemperature" class="gauge-container"></div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-lg-4">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Temperatura</h5>
                            <h3 class="card-title"><i class="tim-icons icon-sound-wave text-primary"></i> 35%</h3>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartLinePurple"></canvas>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Presión</h5>
                            <h3 class="card-title"><i class="tim-icons icon-sound-wave text-primary"></i> 37%</h3>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartLineBlue"></canvas>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Porcentaje</h5>
                            <h3 class="card-title"><i class="tim-icons icon-sound-wave text-success"></i> 90%</h3>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartLineGreen"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Fin Conetenido Dashboards -->

<?php include 'footer_page.php'; ?>
