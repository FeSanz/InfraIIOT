
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        //console.log('sign out OK')
    })
})


function initApp() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(
        function (user) {
            
            if (user) {
                console.log(localStorage.getItem("User"));
                console.log("Sign in");
            } else {
                console.log("log out");
                localStorage.setItem("User", "");
                location.href = 'http://localhost/InfraIIOT-main';
            }
        });
        //document.getElementById('forgotPass').addEventListener('click', sendPasswordReset, false);
}

window.onload = function () {
    initApp();
};