// Demo credentials (in real app, this would be handled by a backend)
const demoUsers = [
    { username: "demo", password: "password123" },
    { username: "test", password: "test123" }
];

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('loginError');
    const loadingSpinner = document.getElementById('loadingSpinner');

   
    loadingSpinner.style.display = 'block';
    
    
    setTimeout(() => {
        const user = demoUsers.find(u => u.username === username && u.password === password);
        
        if (user) {
            
            localStorage.setItem('username', username);
            
            errorMessage.style.display = 'none';
            
            window.location.href = 'dashboard.html';
        } else {
            
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Invalid username or password';
            loadingSpinner.style.display = 'none';
        }
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
   
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('shifted');
    });

  
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickInsideToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('shifted');
        }
    });

    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mainContent.classList.remove('shifted');
        }
    });
}); 