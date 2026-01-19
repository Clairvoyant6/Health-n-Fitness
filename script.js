document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      signupForm.submit();
    }
  });
});

function validateForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  return true;
}
