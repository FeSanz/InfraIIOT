 <!-- Footer -->
                <footer class="footer">
                    <div class="container-fluid">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    Creative Tim
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    About Us
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <div class="copyright">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script>2018 made with <i class="tim-icons icon-heart-2"></i> by
                            <a href="javascript:void(0)" target="_blank">Creative Tim</a> for a better web.
                        </div>
                    </div>
                </footer>
                <!-- Fin Footer -->
            </div>
        </div>

        <!--Panel colores-->
        <div class="fixed-plugin">
            <div class="dropdown show-dropdown">
                <a href="#" data-toggle="dropdown">
                    <i class="fa fa-cog fa-2x"> </i>
                </a>
                <ul class="dropdown-menu">
                    <li class="header-title"> Menú color</li>
                    <li class="adjustments-line">
                        <a href="javascript:void(0)" class="switch-trigger background-color">
                            <div class="badge-colors text-center">
                                <span class="badge filter badge-primary active" data-color="primary"></span>
                                <span class="badge filter badge-dark" data-color="blue"></span>
                                <span class="badge filter badge-success" data-color="green"></span>
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                    <li class="adjustments-line text-center color-change">
                        <span class="color-label">LIGHT MODE</span>
                        <span class="badge light-badge mr-2"></span>
                        <span class="badge dark-badge ml-2"></span>
                        <span class="color-label">DARK MODE</span>
                    </li>

                </ul>
            </div>
        </div>
        <!--Fin panel colores-->
        
        <!--   Core JS Files   -->
        <script src="assets/js/core/jquery.min.js"></script>
        <script src="assets/js/core/popper.min.js"></script>
        <script src="assets/js/core/bootstrap.min.js"></script>
        <script src="assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <!-- Chart JS -->
        <script src="assets/js/plugins/chartjs.min.js"></script>
        <!--  Notifications Plugin    -->
        <script src="assets/js/plugins/bootstrap-notify.js"></script>
        <!-- Control Center for Black Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="assets/js/black-dashboard.min.js?v=1.0.0"></script><!-- Black Dashboard DEMO methods, don't include it in your project! -->
        <script src="assets/demo/demo.js"></script>
        <script src="assets/demo/background_behaviour.js" type="text/javascript"></script>
        <script>
            $(document).ready(function () {
                // Javascript method's body can be found in assets/js/demos.js
                demo.initDashboardPageCharts();

            });
        </script>
        <script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
        <script>
            window.TrackJS &&
                    TrackJS.install({
                        token: "ee6fab19c5a04ac1a32a645abde4613a",
                        application: "black-dashboard-free"
                    });
        </script>

        <!--  Firebase plugin, files  -->
        <script src="assets/js/plugins/chartjs.min.js"></script>
        <!--  Notifications Plugin    -->
        <script src="assets/js/plugins/bootstrap-notify.js"></script>
        <!-- Control Center for Black Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="assets/js/black-dashboard.min.js?v=1.0.0"></script>
        <!-- Black Dashboard DEMO methods, don't include it in your project! -->
        <script src="assets/demo/demo.js"></script>
        <script src="assets/js/storage.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>

        <script>
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyDSaJQjVoC68qsMv36zikiyXST4_dyXGPA",
                authDomain: "i-iot-b1e3d.firebaseapp.com",
                projectId: "i-iot-b1e3d",
                storageBucket: "i-iot-b1e3d.appspot.com",
                messagingSenderId: "914861533746",
                appId: "1:914861533746:web:3db15ad941478bcb8b6a2b",
                measurementId: "G-W8VD8H258M"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
            const auth = firebase.auth();
            const fs = firebase.firestore();
        </script>
    </body>

</html>
