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
            if (!user) {
                location.href = 'index.html';
                //localStorage.setItem("User", "");
                sessionStorage.setItem("User", "");
                return;
            }
        });

    //document.getElementById("userName").innerText = localStorage.getItem("User");
    document.getElementById("userName").innerText = sessionStorage.getItem('User');
    //setInterval(function(){
    //}, 1000);
}

window.onload = function () {
    initApp();
};