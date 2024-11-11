// Função de cadastro simulada
function registerUser() {
    const user = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        profilePic: 'Assents/img/user.png'
    };
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
}

// Login com Google (simulação)
function loginWithGoogle() {
    alert("Login com Google (simulado).");
}

// Login com Facebook (simulação)
function loginWithFacebook() {
    alert("Login com Facebook (simulado).");
}