function checkLogin() {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('user').textContent = user;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
    }
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        localStorage.setItem('user', username);
        checkLogin();
    } else {
        alert('Invalid username or password.');
    }
}
function logout() {
    localStorage.removeItem('user');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

checkLogin();