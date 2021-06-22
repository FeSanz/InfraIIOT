<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">
    <div class="row">
        <div class="col-12">

            <!-- Guages -->
            <div class="card">
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
            </div>
            <!-- Fin guajes -->


            <div class="card">
                    <div class="card-header">
                        <h5 class="title">Seleccione intervalo de fechas</h5>
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal" name="formDates" role="form" enctype="multipar/form-data">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Fecha Inicial</label>
                                        <input type="text" id="startDateValue" placeholder="yyyy-mm-dd" class="form-control" onkeypress="validateKeypress();" required="required">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Final Final</label>
                                        <input type="text" id="endDateValue" placeholder="yyyy-mm-dd" class="form-control" onkeypress="validateKeypress();" required="required">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <br>
                                    <button type="button" id="search_fills_button" class="btn btn-fill btn-primary">Buscar</button> 
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>


            <!-- Charts -->
            <div class="row">
                <div class="col-lg-4">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Temperatura</h5>
                            <h4 id="dateSelectedTemp" class="card-title"><i class="tim-icons icon-sound-wave text-primary"></i></h4>
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
                            <h4 id="dateSelectedPres" class="card-title"><i class="tim-icons icon-sound-wave text-success"></i></h4>
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
                            <h4 id="dateSelectedPer" class="card-title"><i class="tim-icons icon-sound-wave text-danger"></i></h4>
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
