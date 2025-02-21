const name = document.querySelector("#yourname");
const email = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const button = document.querySelector(".btn_locations");

function validateForm() {
  var valid = true;
  const errorMessage = document.getElementById("error-message");
  const name = document.querySelector("#yourname");
  const email = document.querySelector("#email");

  if (name.value === "") {
    name.style.border = "1px solid red";
    valid = false;
  } else {
    name.style.border = "1px solid #1c1601"; // Reset border to default
  }

  if (email.value === "") {
    email.style.border = "1px solid red";
    valid = false;
  } else {
    email.style.border = "1px solid #1c1601"; // Reset border to default
  }

  if (!valid) {
    errorMessage.style.opacity = "1";
  } else {
    errorMessage.style.opacity = "0";
    // Submit the form programmatically
    document.querySelector("form").submit();
  }
}

document.querySelector("#yourname").addEventListener("focus", function () {
  resetForm();
});
document.querySelector("#email").addEventListener("focus", function () {
  resetForm();
});

function resetForm() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.style.opacity = "0";
  // Reset border of both inputs
  document.getElementById("yourname").style.border = "1px solid #1c1601";
  document.getElementById("email").style.border = "1px solid #1c1601";
}
