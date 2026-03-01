console.log('script loaded');

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const stored = localStorage.getItem('user');
      if (!stored) {
        showMessage('login-message','No user found. Please register.');
        return;
      }
      const user = JSON.parse(stored);
      if (user.email === email && user.password === password) {
        showMessage('login-message','Login successful! Redirecting...');
        setTimeout(()=>window.location.href='index.html',1000);
      } else {
        showMessage('login-message','Email or password incorrect.');
      }
    });
  }
  if (registerForm) {
    registerForm.addEventListener('submit', e=>{
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      if (!email || !password) {
        showMessage('register-message','Please fill out all fields.');
        return;
      }
      localStorage.setItem('user', JSON.stringify({email,password}));
      showMessage('register-message','Registration successful! Redirecting to login...');
      setTimeout(()=>window.location.href='login.html',1000);
    });
  }
});

function showMessage(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = message;
}
