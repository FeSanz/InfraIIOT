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
                localStorage.setItem("User", "");
                location.href = 'index.html';
            }
        });

    document.getElementById("userName").innerText = localStorage.getItem("User");
    //setInterval(function(){
    //}, 1000);
}

window.onload = function () {
    initApp();
};