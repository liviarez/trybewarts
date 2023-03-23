const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

const validateForm = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

loginBtn.addEventListener('click', validateForm);
