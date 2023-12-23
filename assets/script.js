const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

function showAlert() {
    alert("Username : admin \nPassword : admin123 \n \nUsername : user\nPassword : user123");
 }

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

var modal = document.getElementById('Login');

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}

