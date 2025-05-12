function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "flex";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "flex";
}

const passwordInput = document.getElementById("registerPassword");
const passwordStrength = document.getElementById("passwordStrength");
const registerBtn = document.getElementById("registerBtn");

if (passwordInput) {
  passwordInput.addEventListener("input", () => {
    const pwd = passwordInput.value;
    const strength = getPasswordStrength(pwd);

    if (strength === "Faible") {
      passwordStrength.textContent = "Mot de passe faible";
      passwordStrength.style.color = "red";
      registerBtn.disabled = true;
    } else if (strength === "Moyen") {
      passwordStrength.textContent = "Mot de passe moyen";
      passwordStrength.style.color = "orange";
      registerBtn.disabled = false;
    } else if (strength === "Fort") {
      passwordStrength.textContent = "Mot de passe fort";
      passwordStrength.style.color = "green";
      registerBtn.disabled = false;
    } else {
      passwordStrength.textContent = "";
      registerBtn.disabled = true;
    }
  });
}

function getPasswordStrength(password) {
  const longEnough = password.length >= 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecials = /[^a-zA-Z0-9]/.test(password);

  if (!longEnough) return "Faible";
  if (hasLetters && hasNumbers && hasSpecials) return "Fort";
  if (hasLetters && hasNumbers) return "Moyen";
  return "Faible";
}
