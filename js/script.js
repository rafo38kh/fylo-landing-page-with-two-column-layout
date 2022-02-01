const forms = [...document.querySelectorAll(".js-form")];
const inputs = document.querySelectorAll(".js-input");
const errors = document.querySelectorAll(".js-error");
const buttons = document.querySelectorAll(".js-button");

const checkEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

  return regex.test(email);
};

const checkForm = function (e) {
  e.preventDefault();

  const index = forms.indexOf(e.target);
  const input = inputs[index];
  const error = errors[index];

  if (!checkEmail(input.value) || input.value === "") {
    error.style.visibility = "visible";
    error.style.opacity = 1;
    input.classList.add("email-error");
  } else {
    error.style.visibility = "hidden";
    error.style.opacity = 0;
    input.classList.remove("email-error");

    setTimeout(() => {
      input.value = "";
      error.style.visibility = "hidden";
      error.style.opacity = 0;
    }, 1500);
  }
};

forms.forEach((form) => form.addEventListener("submit", checkForm));
window.addEventListener("load", () =>
  inputs.forEach((input) => (input.value = ""))
);
