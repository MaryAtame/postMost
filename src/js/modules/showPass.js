document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", changeIcon)
});

const btn = document.querySelector("[data-button-open-pass]");
const inputPass = document.querySelector("[data-new-pass]");


function changeIcon(e) {
  e.preventDefault();
  btn.classList.toggle('open');
  showPass();
}


function showPass() {
  if (inputPass.getAttribute('type') == 'password') {
    inputPass.setAttribute('type', 'text');
  } else {
    inputPass.setAttribute('type', 'password');
  }
}

