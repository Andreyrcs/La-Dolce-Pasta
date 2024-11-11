document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar li");
    const sections = document.querySelectorAll(".section");

    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const sectionId = item.getAttribute("data-section");
            sections.forEach(section => {
                section.style.display = section.id === sectionId ? "block" : "none";
            });

            // Animação de "pop" ao clicar
            item.classList.add("pop");
            setTimeout(() => item.classList.remove("pop"), 200);
        });
    });

    document.querySelectorAll('.delete-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0';

            setTimeout(() => {
                card.remove();
            }, 300);
        });
    });
});
document.querySelectorAll('.delete-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const card = e.target.closest(' .address-card');
        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        card.style.transform = 'scale(0.9)';
        card.style.opacity = '0';

        setTimeout(() => {
            card.remove();
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addAddressButton = document.querySelector(".add-address-button");
    const addressForm = document.getElementById("address-form");
    const addressList = document.getElementById("address-list");

    // Função para exibir o formulário ao clicar no botão "Nova localização"
    addAddressButton.addEventListener("click", () => {
        addressForm.style.display = "block";
    });

    // Função para buscar informações de endereço pelo CEP
    const fetchAddressByCep = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }
            document.getElementById("street").value = data.logradouro;
            document.getElementById("neighborhood").value = data.bairro;
            document.getElementById("city").value = data.localidade;
            document.getElementById("state").value = data.uf;
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
        }
    };

    // Event listener para preencher o endereço automaticamente ao inserir o CEP
    document.getElementById("cep").addEventListener("blur", (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        if (cep.length === 8) {
            fetchAddressByCep(cep);
        }
    });

    // Função para criar um novo card de endereço
    const createAddressCard = (title, street,numberHome , neighborhood, city, state) => {
        const addressCard = document.createElement("div");
        addressCard.classList.add("address-card");

        addressCard.innerHTML = `
            <div class="address-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="address-details">
                <h3>${title}</h3>
                <p>${street}, ${numberHome} , ${neighborhood}, ${city} - ${state}</p>
            </div>
            <div class="address-actions">
                <i class="fas fa-edit edit-icon"></i>
                <i class="fas fa-trash delete-icon"></i>
            </div>
        `;

        // Botão de exclusão
        addressCard.querySelector(".delete-icon").addEventListener("click", () => {
            addressCard.remove();
        });

        // Botão de edição
        addressCard.querySelector(".edit-icon").addEventListener("click", () => {
            document.getElementById("location-name").value = title;
            document.getElementById("cep").value = "";
            document.getElementById("street").value = street;
            document.getElementById("neighborhood").value = neighborhood;
            document.getElementById("numberHome").value = numberHome;
            document.getElementById("city").value = city;
            document.getElementById("state").value = state;
           
            addressForm.style.display = "block";
            addressCard.remove();
        });

        addressList.appendChild(addressCard);
    };

    // Salva a nova localização ao submeter o formulário
    addressForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("location-name").value;
        const street = document.getElementById("street").value;
        const numberHome = document.getElementById("numberHome").value;
        const neighborhood = document.getElementById("neighborhood").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;


        createAddressCard(title, street, numberHome, neighborhood, city, state);

        // Limpa o formulário após o envio
        addressForm.reset();
        addressForm.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        document.getElementById("userName").textContent = userData.name;
        document.getElementById("userProfilePic").src = userData.profilePic || "Assents/img/user.png";
    }
});

function showUserInfo() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        document.getElementById("modalUserName").textContent = userData.name;
        document.getElementById("modalUserEmail").textContent = userData.email;
        document.getElementById("modalUserCpf").textContent = userData.cpf || "N/A";
        document.getElementById("userInfoModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("userInfoModal").style.display = "none";
}


// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar li");
    const sections = document.querySelectorAll(".section");
    const savedCardsCard = document.getElementById("saved-cards");
    const savedCardsPanel = document.getElementById("saved-cards-panel");
    const closePanelButton = document.getElementById("close-panel");
    const addBalanceForm = document.getElementById("add-balance-form");
    const savedCardsList = document.getElementById("saved-cards-list");
    const confirmationMessage = document.createElement("div");
    
    let savedCards = [];

    confirmationMessage.id = "confirmation-message";
    confirmationMessage.style.display = "none";
    confirmationMessage.style.position = "fixed";
    confirmationMessage.style.top = "20px";
    confirmationMessage.style.right = "20px";
    confirmationMessage.style.padding = "10px";
    confirmationMessage.style.backgroundColor = "#4caf50";
    confirmationMessage.style.color = "white";
    confirmationMessage.style.borderRadius = "5px";
    confirmationMessage.innerText = "Cadastro de cartão concluído!";
    document.body.appendChild(confirmationMessage);

    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const sectionId = item.getAttribute("data-section");
            sections.forEach(section => {
                section.style.display = section.id === sectionId ? "block" : "none";
            });

            // Animação de "pop" ao clicar
            item.classList.add("pop");
            setTimeout(() => item.classList.remove("pop"), 200);
        });
    });

    document.querySelectorAll('.delete-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const card = e.target.closest('.wishlist-card');
            card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0';

            setTimeout(() => {
                card.remove();
            }, 300);
        });
    });

    savedCardsCard.addEventListener("click", () => {
        savedCardsPanel.style.display = "block";
        updateSavedCardsList();
    });

    closePanelButton.addEventListener("click", () => {
        savedCardsPanel.style.display = "none";
    });

    addBalanceForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const holderName = document.getElementById("holder-name").value;
        const cardNumber = document.getElementById("card-number").value;
        const expirationMonth = document.getElementById("expiration-month").value;
        const expirationYear = document.getElementById("expiration-year").value;
        const cvv = document.getElementById("cvv").value;

        const newCard = {
            holderName,
            cardNumber,
            expirationMonth,
            expirationYear,
            cvv
        };

        savedCards.push(newCard);
        updateSavedCardsList();

        addBalanceForm.reset();
        showConfirmationMessage();
    });

    function updateSavedCardsList() {
        savedCardsList.innerHTML = "";
        savedCards.forEach((card, index) => {
            const li = document.createElement("li");
            li.textContent = `Card ${index + 1}: ${card.holderName}, ${card.cardNumber}, Exp: ${card.expirationMonth}/${card.expirationYear}`;
            savedCardsList.appendChild(li);
        });
    }

    function showConfirmationMessage() {
        confirmationMessage.style.display = "block";
        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 3000);
    }
});
