function generateRobux() {
  const usernameElement = document.getElementById('username');
  const robuxElement = document.getElementById('robux');
  const errorMessageElement = document.getElementById('error-message');
  const errorMessageSpanElement = errorMessageElement.querySelector('span');

  if (usernameElement.value === '' || robuxElement.value === '') {
      errorMessageSpanElement.innerText = 'No username or robux specified!';
  } else {
      window.location.href = 'rickroll.html';
  }
}