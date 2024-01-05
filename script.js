// 2372034 Exalt winata Gunawan B 

// login
function account() {
  alert("Username : Admin \nPassword  : admin123 \n \nUsername  : Exalt \nPassword  : Exalt12345")
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'Admin' && password === 'admin123') {
    // Menyembunyikan form login dan menampilkan username setelah login
    document.getElementById('pfp').src = 'images/profile.jpg';
    document.getElementById('loginGroup').style.display = 'none';
    document.getElementById('loggedInGroup').style.display = 'block';
    document.getElementById('akun').style.display = 'block';
    document.getElementById('log').style.display = 'none';
    document.getElementById('loggedInUser').textContent = 'Welcome, ' + username + '!';
    document.getElementById('user').textContent = username;
  } else if (username === 'Exalt' && password === 'Exalt12345') {
    // Menyembunyikan form login dan menampilkan username setelah login
    document.getElementById('pfp').src = 'images/exalt.jpg';
    document.getElementById('loginGroup').style.display = 'none';
    document.getElementById('loggedInGroup').style.display = 'block';
    document.getElementById('akun').style.display = 'block';
    document.getElementById('log').style.display = 'none';
    document.getElementById('loggedInUser').textContent = 'Welcome, ' + username + '!';
    document.getElementById('user').textContent = username;
  }
  else {
    alert('Login failed. Please check your username and password.');
  }
}

// log out
function logout() {
  document.getElementById('loginGroup').style.display = 'none';
  document.getElementById('loggedInGroup').style.display = 'block';
}

// dark mode

function darkMode() {
    const body = document.body;
    const tema = body.getAttribute("data-bs-theme");
    const icon = document.getElementById("icon");
    const cnt = document.getElementById("cnt");
  
    let newTheme;
  
    if (tema === "dark") {
      newTheme = "light";
      icon.src = "images/moon.png";
      cnt.src = "images/contact.png"
    } else {
      newTheme = "dark";
      icon.src = "images/sun.png";
      cnt.src = "images/contact-dark.png"
    }
  
    body.setAttribute("data-bs-theme", newTheme);
}

// image
function onClick(picture) {
  document.getElementById("bigpic").src = picture.src;
  document.getElementById("picmodal").style.display = "block";
}
