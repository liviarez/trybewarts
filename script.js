const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreementBox = document.getElementById('agreement');

const validateForm = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

loginBtn.addEventListener('click', validateForm);

const enableButton = () => {
  if (submitButton.getAttribute('disabled') === null) {
    submitButton.setAttribute('disabled', '');
  } else {
    submitButton.removeAttribute('disabled');
  }
};

agreementBox.addEventListener('change', enableButton);
