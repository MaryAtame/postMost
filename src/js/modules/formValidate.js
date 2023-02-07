document.addEventListener("DOMContentLoaded", () => {
  let inputPass = document.getElementsByName("newPass");
  inputPass.forEach((input) => {
    input.addEventListener("change", isPassValid);
  });
});

function isPassValid(e) {

  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (validPass.test(e.target.value)) {
    console.log("ok");
    if (e.target.classList.contains("noValid")) {
      e.target.classList.remove("noValid");
      deleteErrorMessage(e);
    }
  } else {
    console.log("wrong");
    createErrorMessage(e);
    if (!e.target.classList.contains("noValid")) {
      e.target.classList.add("noValid");
    }
  }
}

function createErrorMessage(e) {
  const parentInput = e.target.parentElement;
  if (!!parentInput.getElementsByTagName("p") && parentInput.childElementCount < 3) {
    let textError = parentInput.appendChild(document.createElement("p"));
    textError.classList.add("onError");
    textError.innerText = "Пароль должен быть не менее 6 символов";
  }
}

function deleteErrorMessage(e) {
  const parentInput = e.target.parentElement;
  let textError = parentInput.querySelectorAll("p");

  if (textError[0].parentElement) {
    textError[0].parentElement.removeChild(textError[0]);
  }
}

