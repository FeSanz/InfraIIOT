<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">
    <div class="row">

        <div class="col-12">

            <div class="row">
                <div class="col-sm-12">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                        <label class="btn btn-sm btn-primary btn-simple active">
                            <input type="radio" name="options" checked>
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq01">O1</span>                                           
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq02">O2</span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq03">O3</span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq04">O4</span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq05">O5</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Guages -->
            <div class="card">
                <div class="card card-chart">

                    <div class="card-header ">
                        <div class="row">
                            <div class="card-header">
                                <h3 class="card-title"><i class="tim-icons icon-chart-bar-32 text-primary"></i> Estado actual</h3>
                            </div>
                            <div class="dropdown">
                                <div class="card-category" id="equipName">Equipo 1</div>
                                <div class="card-category" id="message"></div>
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

            <!-- Tempratura dash -->
            <div class="row">
                <div class="col-12">
                    <div class="card card-chart">
                        <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <h4 class="card-title">Temperatura</h4>
                                    <h5 class="card-category" id="dateSelectedTemp"></h5>
                                </div>
                                <div class="dropdown">
                                    <div class="card-category" id="minTemperature"></div>
                                    <div class="card-category" id="maxTemperature"></div>
                                </div> 
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartBigTemperature"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Presión dash -->
            <div class="row">
                <div class="col-12">
                    <div class="card card-chart">
                        <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <h4 class="card-title">Presion</h4>
                                    <h5 class="card-category" id="dateSelectedPres"></h5>
                                </div>
                                <div class="dropdown">
                                    <div class="card-category" id="minPressure"></div>
                                    <div class="card-category" id="maxPressure"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartBigPressure"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Porcentage dash -->
            <div class="row">
                <div class="col-12">
                    <div class="card card-chart">
                        <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <h4 class="card-title">Porcentaje</h4> 
                                    <h5 class="card-category" id="dateSelectedPer"></h5>
                                </div>
                                <div class="dropdown">
                                    <div class="card-category" id="minPercentage"></div>
                                    <div class="card-category" id="maxPercentage"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas id="chartBigPercentage"></canvas>
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
