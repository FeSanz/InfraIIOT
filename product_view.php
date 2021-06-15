<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">
    <div class="row">
        <div class="col-12">

            <!-- Guages -->
            <div class="card card-chart">
                <div class="card-header ">
                    <div class="row">
                         <div class="card-header">
                            <h3 class="card-title"><i class="tim-icons icon-chart-bar-32 text-primary"></i> Estado actual</h3>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card-header">
                                    <h5 class="card-category">Temperatura</h5>
                                </div>
                                <div id="gauge_temperature"></div>
                            </div>
                            <div class="col-lg-4">
                                 <div class="card-header">
                                    <h5 class="card-category">Presión</h5>
                                </div>
                                <div id="gauge_presion"></div>
                            </div>
                            <div class="col-lg-4">
                                 <div class="card-header">
                                    <h5 class="card-category">Porcentaje</h5>
                                </div>
                                <div id="gauge_percentage"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin guajes -->

            <!-- Charts -->
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
            <!-- Fin Charts -->
        </div>
    </div>
</div>
<!-- Fin Conetenido Dashboards -->

<?php include 'footer_page.php'; ?>
