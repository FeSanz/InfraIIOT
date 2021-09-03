<?php include 'header_page.php'; ?>

<!-- Conetenido Dashboards -->
<div class="content">
    <div class="row">
        <div class="col-12">

            <!-- Botones para equipos -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                        <label class="btn btn-sm btn-info btn-simple active">
                            <input type="radio" name="options" checked>
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq01">O1</span>                                           
                        </label>
                        <label class="btn btn-sm btn-info btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq02">O2</span>
                        </label>
                        <label class="btn btn-sm btn-info btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq03">O3</span>
                        </label>
                        <label class="btn btn-sm btn-info btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq04">O4</span>
                        </label>
                        <label class="btn btn-sm btn-info btn-simple">
                            <input type="radio" class="d-none d-sm-none" name="options">
                            <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block" id="eq05">O5</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Fin Botones para equipos -->

            <!-- Barra de selección de fechas -->
            <div class="row">
                <div class="col-12">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h4 class="card-title">Seleccione intervalo de fechas</h4>
                            <div class="dropdown">
                                <div class="card-category text-right" id=""></div>
                            </div>
                        </div>
                        <div class="card-body">
                            <form class="form-horizontal" name="formDates" role="form" enctype="multipar/form-data">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Fecha Inicial</label>
                                            <input type="text" id="startDateValue" placeholder="yyyy-mm-dd" class="form-control" required="required">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Fecha Final</label>
                                            <input type="text" id="endDateValue" placeholder="yyyy-mm-dd" class="form-control" required="required">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <br>
                                            <button type="button" id="search_alarms_button" class="btn btn-fill btn-success">Buscar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin de barra de selección de fechas -->

            <div class="row">

                <div class="col-lg-12 col-md-12">
                    <div class="card card-tasks">
                        <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-11 text-left">
                                    <h6 class="title d-inline">Registro de incidencias</h6>
                                    <p class="card-category d-inline" id="">
                                    </p>
                                    <h5 class="card-category" id="dateSelectedGroups"></h5>
                                </div>
                                <div class="dropdown">
                                    <div class="card-category" id="totalIncidents"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body ">
                            <div id="chartdonut-indicidents"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="card ">
                          <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-11 text-left">
                                    <h6 class="title d-inline">Historial de incidencias</h6>
                                    <p class="card-category d-inline" id="">
                                    </p>
                                    <h5 class="card-category" id="dateSelectedGroups"></h5>
                                </div>
                                <div class="dropdown">
                                    <div class="card-category" id="totalIncidents"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="display table table-dark" id="dataTables-incidents" style="width:100%" >
                                <thead class="">
                                    <tr>
                                        <th>
                                            Fecha/Hora
                                        </th>
                                        <th>
                                            Causa de la incidencia
                                        </th>
                                        <th>
                                            Equipo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="content-incidents">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>   

        </div>
    </div>
</div>
<!-- Fin Conetenido Dashboards -->

<?php include 'footer_page.php'; ?>               