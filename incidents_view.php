<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">

    <div class="row">
        <div class="col-lg-6">
            <div class="card card-chart" style="height: 40em;">
                <div class="card-header">
                    <h5 class="card-category text-right">Registro de incidencias</h5>
                    <h3 class="card-title"><i class="tim-icons icon-sound-wave text-success"></i> * </h3>
                </div>
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="chartDoughnut"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="card ">
                <div class="card-header">
                    <h4 class="card-title"> Historial de incidencias</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="table" class="table tablesorter " >
                            <thead class=" text-primary">
                                <tr>
                                    <th class="text-center">
                                        Fecha/Hora
                                    </th>
                                    <th class="text-center">
                                        Causa de la incidencia
                                    </th>
                                    <th class="text-center">
                                        Equipo
                                    </th>
                                    <!--
                                    <th class="text-center">
                                        Accion
                                    </th>
                                    -->
                                </tr>
                            </thead>
                            <tbody id="tbody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="row" style="height: 20em;">
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
                        <canvas id="chartLineBlue"></canvas>
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
                        <canvas id="chartLinePurple"></canvas>
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
    -->
</div>
<!-- Fin Conetenido Dashboards -->
                
<?php include 'footer_page.php'; ?>               