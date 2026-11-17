const input = document.getElementById('password');
const form = document.getElementById('password-form');
const gate = document.getElementById('gate');
const birthday = document.getElementById('birthday');
const replay = document.getElementById('replay');
const confetti = document.getElementById('confetti');

const password = 'bella20';
let confettiTimer;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value === password) {
    gate.hidden = true;
    birthday.hidden = false;

    clearTimeout(confettiTimer);
    confetti.hidden = false;
    confettiTimer = setTimeout(() => {
      confetti.hidden = true;
    }, 2500);
  } else {
    input.value = '';
    showCustomAlert('stop trying!');
  }
});

replay.addEventListener('click', () => {
  clearTimeout(confettiTimer);
  confetti.hidden = true;
  birthday.hidden = true;
  gate.hidden = false;
});

function showCustomAlert(message) {
  const alertDialog = document.getElementById('customAlert');
  document.getElementById('alertMessage').textContent = message;
  alertDialog.showModal();
}