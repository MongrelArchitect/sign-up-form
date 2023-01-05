const invalid = 'box-shadow:2px 2px 0 #d00;border:1px solid #d00;outline:none';
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm'); 
const message = document.querySelector('#password-message');
const button = document.querySelector('button');

function enforceMatch() {
  if (confirm.value !== password.value) {
    password.setAttribute('style', invalid);
    confirm.setAttribute('style', invalid);
    message.classList.remove('hidden');
    button.disabled = true;
  } else {
    password.removeAttribute('style');
    confirm.removeAttribute('style');
    message.classList.add('hidden');
    button.disabled = false;
  }
}

password.addEventListener('keyup', enforceMatch);
confirm.addEventListener('keyup', enforceMatch);
