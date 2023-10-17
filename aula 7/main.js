document.addEventListener("DOMContentLoaded",function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message")

    loginForm.addEventListener("submit",function(e){
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const senha = "12345";
        const usuario = "milly";

        if (username === usuario && password === senha){
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Nome de usuário/senha incorretos.";
            errorMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded",function() {
    const cadastroForm = document.getElementById("cadastro-form");
    const errorMessage = document.getElementById("error-message-cadastro")

    cadastroFormForm.addEventListener("submit",function(e){
        e.preventDefault();
        const password = cadastroForm.password.value;
        const confirpassword = cadastroFormForm.confirmaPassword.value;

        if (password === confirpassword){
            errorMessage.textContent = "Cadastro realizado com sucesso!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Senhas estão diferentes!";
            errorMessage.style.color = "red";
        }
    });
});