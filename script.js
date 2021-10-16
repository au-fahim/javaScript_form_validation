const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show inputs error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check username is valid
function checkValidUserName(input, min, max) {
  const regex = /^[a-zA-Z .]{3,25}$/;
  // return regex.test(String(username));
  if (input.value === "") {
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} characters`
    );
  } else if (!regex.test(String(input.value)) === true) {
    showError(input, `Only A-Z, a-z & ' . ' are acceptable`);
  } else {
    showSuccess(input);
  }
}

// Check email is valid
function checkValidEmail(input) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // re.test(String(email).toLowerCase());
  if (input.value === "") {
  } else if (!regex.test(String(input.value).toLowerCase())) {
    showError(input, `Email is not valid`);
  } else {
    showSuccess(input);
  }
}

// Check 2 password are same
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Passwords do not match`);
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  // checkLength(username, 3, 25);
  checkValidEmail(email);
  checkValidUserName(username, 3, 25);
  checkPasswordMatch(password, password2);

  e.preventDefault(SubmitEvent);
});

/**
 *
 *
 *
 *
 */

// Toggle password show/hide
const toggleShowBtn = document.querySelector("#toggleShowBtn");

// Toggle Confirm Password Show/hide
const toggleShowBtn2 = document.querySelector("#toggleShowBtn2");

function togglePassword(eventTarget, passwordType) {
  eventTarget.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      passwordType.getAttribute("type") === "password" ? "text" : "password";
    passwordType.setAttribute("type", type);
    // toggle the eye / eye slash icon
    this.classList.toggle("bx-show");
  });
}

togglePassword(toggleShowBtn, password);
togglePassword(toggleShowBtn2, password2);
