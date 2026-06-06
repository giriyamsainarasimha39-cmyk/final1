const auth = firebase.auth();

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        document.getElementById("error").innerText = error.message;
    });
}




function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("Signup successful!");
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        alert(error.message);
    });
}