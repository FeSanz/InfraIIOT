function ChangePage1() {
    location.href = 'incidents_view.html';
}

const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //.createUserWithEmailAndPassword(email, password)
    auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            //clear form
            document.getElementById("errorMessageSession").innerText = "";
            //localStorage.setItem("User", email)
            sessionStorage.setItem("User", email)
            let data = sessionStorage.getItem('User');
            signinForm.reset();
            //console.log('sign in OK')
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            document.getElementById("errorMessageSession").innerText = "Usuario o contraseña incorrectos";
            sessionStorage.clear();
            /*var errorMessage = error.message;
            console.log(errorMessage);
            console.log(errorCode);
            
            if (errorCode == 'auth/user-not-found') {
            }*/
        });
})

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Password Reset Email Sent!
        //alert('Password Reset Email Sent!');
        document.getElementById("errorMessageSession").innerText = "Se ha enviado un correo de recuperación";
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            //alert(errorMessage);
            document.getElementById("errorMessageSession").innerText = "Formato de correo inválido";
        } else if (errorCode == 'auth/user-not-found') {
            //alert(errorMessage);
            document.getElementById("errorMessageSession").innerText = "Correo electrónico no encontrado";
        }
        //console.log(error);
    });
}

function initApp() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(
        function (user) {
            if (user) {
                location.href = 'product_view.php';
            } else {
                //console.log("log out");
            }
        });
    document.getElementById('forgotPass').addEventListener('click', sendPasswordReset, false);
}

window.onload = function () {
    initApp();
};