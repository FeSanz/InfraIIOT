<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- No Cache -->
        <meta http-equiv='cache-control' content='no-cache'>
        <meta http-equiv='expires' content='0'>
        <meta http-equiv='pragma' content='no-cache'>
        
        <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
        <link rel="icon" type="image/png" href="assets/img/favicon.png">
        <title>
            Infra IIoT
        </title>
        <!--     Fonts and icons     -->
        <link href="assets/local/css/fonts_google.css?family=Poppins:200,300,400,600,700,800" rel="stylesheet" type="text/css"/>
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <!--  Icons -->
        <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />
        <!-- Dashboards Style -->
        <link href="assets/css/demo.css" rel="stylesheet" />
         <!-- Alertify CSS-->
        <link href="assets/alertify/css/themes/default.rtl.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/alertify/css/alertify.min.css" rel="stylesheet" type="text/css"/>
        <script src="assets/alertify/sweetalert2.all.js" type="text/javascript"></script>
         <!-- JQuery CSS-->
        <link href="assets/local/css/jquery_ui.css" rel="stylesheet" type="text/css"/>
        <!-- DataTable-->
        <link href="assets/dataTable/dataTables_1_11.css" rel="stylesheet" type="text/css"/>
        <style>
                    table.dataTable tbody tr.selected {
                        color: white !important;
                        background-color: #d346b1 !important;  /* Not working */
                    }
                </style>
        <script src="assets/dataTable/jquery-3.5.1.js" type="text/javascript"></script>
        <script src="assets/dataTable/dataTables.min.js" type="text/javascript"></script>
        <script src="assets/dataTable/dataTables.js" type="text/javascript"></script>
        <!--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.0/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>-->
        <!--<script src="assets/local/js/jquery_3.6.0.js" type="text/javascript"></script>-->
        <!--<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.0/js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.0/js/jquery.dataTables.js"></script>-->
        
        <!-- Fusion Charts JS-->
        <script src="assets/fusion/js/fusioncharts.js" type="text/javascript"></script>
        <script src="assets/fusion/js/themes/fusioncharts.theme.fusion.js" type="text/javascript"></script>
        

    </head>

    <body class="">
        <div class="loader"></div>
        <div class="wrapper">
            
            <!-- Panel de navegación -->
            <div class="sidebar">
                <div class="sidebar-wrapper">
                    <div class="logo">
                        <a href="javascript:void(0)" class="simple-text logo-mini">

                        </a>
                        <a href="javascript:void(0)" class="simple-text logo-normal">
                            Menú
                        </a>
                    </div>
                    <ul class="nav">
                        <li>
                            <a href="./product_view.php">
                                <i class="tim-icons icon-chart-pie-36"></i>
                                <p>Productividad</p>
                            </a>
                        </li>
                        <li>
                            <a href="./incidents_view.php">
                                <i class="tim-icons icon-alert-circle-exc"></i>
                                <p>Incidencias</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Fin panel de navegación -->

            <div class="main-panel">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <div class="navbar-toggle d-inline">
                                <button type="button" class="navbar-toggler">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a class="navbar-brand" href="javascript:void(0)">Infra</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navigation">
                            <ul class="navbar-nav ml-auto">
                                <li class="search-bar input-group">
                                    <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i class="tim-icons icon-zoom-split" ></i>
                                        <span class="d-lg-none d-md-block">Buscar</span>
                                    </button>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                        <div class="notification d-none d-lg-block d-xl-block"></div>
                                        <i class="tim-icons icon-bell-55"></i>
                                        <div class="badge1" id="numAlerts">0</div>
                                        <p class="d-lg-none">
                                            Notificaciones
                                        </p>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right dropdown-navbar" id="alertList">
                                        <li class="nav-link"><a href="#" class="nav-item dropdown-item">No hay alertas</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item">
                                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                        <div class="photo">
                                            <img src="assets/img/anime3.png" alt="Profile Photo" width="240px">
                                        </div>
                                        <b class="caret d-none d-lg-block d-xl-block"></b>
                                        <p class='d-lg-none' id="userName"></p>
                                    </a>
                                    <ul class="dropdown-menu dropdown-navbar">
                                        <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Perfil</a></li>
                                        <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Configuración</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li class="nav-link"><a href="javascript:void(0)" id="logout" class="nav-item dropdown-item">Cerrar Sesión</a></li>
                                    </ul>
                                </li>
                                <li class="separator d-lg-none"></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- Fin Navbar -->
                
                <!-- Search -->
                <div class="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <i class="tim-icons icon-simple-remove"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin Search -->

                <!-- AlertModal de notificación -->
                <div class="modal fade" id="AlertModalNotification" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="modal-title" id="tituloAlerta"></h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p id="informacionModalAlerta"></p>
                            </div>
                            <div class="modal-footer">
                                <div class="w-100">
                                <!--button type="button" class="btn btn-success">Aceptar</button-->
                                    <button type="button" class="btn btn-success float-right" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin notificación -->