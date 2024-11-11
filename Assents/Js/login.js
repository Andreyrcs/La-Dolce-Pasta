function loginUser() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Simulação de verificação de email/senha
    if (email && senha) {
        const user = {
            name: "Usuário",
            email: email,
            profilePic: "Assents/img/user.png"
        };
        localStorage.setItem("userData", JSON.stringify(user));
        alert("Login bem-sucedido!");
        window.location.href = "perfil.html"; // Redireciona para a página de perfil
    } else {
        alert("Credenciais inválidas.");
    }
}