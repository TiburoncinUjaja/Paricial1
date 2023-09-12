// Obtener referencias a los elementos del formulario
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const signUpButton = document.getElementById("signUpButton");
const cancelButton = document.getElementById("cancelButton");

// Manejar el evento clic del botón "Login"
loginButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;
    console.log("Usuario: " + username);
    console.log("Contraseña: " + password);
});

// Manejar el evento clic del botón "Sign Up"
signUpButton.addEventListener("click", function () {
    // Redireccionar a la página de registro (reemplazar con la URL de tu página de registro)
    window.location.href = "registro.html";
});

// Manejar el evento clic del botón "Cancel"
cancelButton.addEventListener("click", function () {
    // Redireccionar a la página de inicio (reemplazar con la URL de tu página de inicio)
    window.location.href = "index.html";
});
