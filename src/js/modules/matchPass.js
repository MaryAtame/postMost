document.addEventListener("DOMContentLoaded", () => {
  const inputsPass = document.querySelectorAll("[data-password]");
  const btnSend = document.querySelector("[data-btn-send]");
  inputsPass.forEach((input) => {
    btnSend.addEventListener("click", isPassMatches);
  });
});


function isPassMatches() {
  const firstPass = document.querySelector("[data-new-pass]");
  const secondPass = document.querySelector("[data-second-pass]");
  const secondPassParent = secondPass.parentElement;

  let firstPassValue = firstPass.value;
  let secondPassValue = secondPass.value;

  if (firstPassValue != secondPassValue && secondPassParent.childElementCount < 2) {
    let textError = secondPassParent.appendChild(document.createElement("p"));
    textError.classList.add("onError");
    textError.innerText = "Пароли не совпадают";
  } else {
    let textError = secondPassParent.querySelectorAll('p')
    if (textError[0].parentElement) {
      textError[0].parentElement.removeChild(textError[0]);
    }
  }
}


