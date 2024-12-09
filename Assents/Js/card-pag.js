// // Seleciona todos os botões "Adicionar ao carrinho" nos cards
// const addToCartButtons = document.querySelectorAll('.flip-box-back button');

// // Seleciona a seção My Address e o contêiner da lista do carrinho
// const myAddressSection = document.getElementById('myAddress');
// const cartList = document.querySelector('.Carrinho-p-list');
// const cartTotalElement = document.getElementById('carttotal');
// const checkoutButton = document.getElementById('checkout-button');
// const cartSummary = document.getElementById('cart-summary');







// // Função para alternar entre as seções, exibindo apenas a seção especificada
// function showSection(sectionId) {
//     const sections = document.querySelectorAll('.section');
//     sections.forEach(section => {
//         section.style.display = section.id === sectionId ? 'block' : 'none';
//     });
// }
// // Função para salvar itens no localStorage
// function saveCartToLocalStorage(items) {
//     localStorage.setItem('cart', JSON.stringify(items));
// }

// // Função para carregar itens do localStorage
// function loadCartFromLocalStorage() {
//     const cartItems = localStorage.getItem('cart');
//     return cartItems ? JSON.parse(cartItems) : [];
// }

// // Função para adicionar um item ao carrinho e salvar no localStorage
// function addItemToCart(event) {
//     const card = event.target.closest('.card-li');
//     const productName = card.querySelector('h3').innerText;
//     const productDescription = card.querySelector('p').innerText;
//     const productPrice = card.querySelector('.price').innerText;
//     const productQty = card.querySelector('.qty-count').value;

//     // Carrega o carrinho atual do localStorage
//     const cart = loadCartFromLocalStorage();

//     // Adiciona o novo item ao carrinho
//     cart.push({
//         name: productName,
//         description: productDescription,
//         price: productPrice,
//         quantity: productQty
//     });

//     // Salva o carrinho atualizado no localStorage
//     saveCartToLocalStorage(cart);

//     // Redireciona para a página do carrinho (substitua 'myAddress.html' com o link da página do carrinho)
//     window.location.href = 'Carrinho.html?tab=myAddress';
// }

// // Adiciona o evento de clique para todos os botões "Adicionar ao carrinho"
// document.querySelectorAll('.flip-box-back button').forEach(button => {
//     button.addEventListener('click', addItemToCart);
// });
// // Função para exibir os itens do carrinho
// function displayCartItems() {
//     const cartList = document.querySelector('.Carrinho-p-list');
//     const cartItems = loadCartFromLocalStorage();

//     // Limpa a lista para evitar duplicações
//     cartList.innerHTML = '';

//     // Adiciona cada item ao HTML da lista do carrinho
//     cartItems.forEach(item => {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('Carrinho-p-item');

//         cartItem.innerHTML = `
//             <h3>${item.name}</h3>
//             <p>${item.description}</p>
//             <p><strong>Quantidade:</strong> ${item.quantity}</p>
//             <p><strong>Preço:</strong> R${(item.price)}</p>
//             <i class="delete-icon-carrinho">❌</i>
//         `;

//         // Evento para remover o item do carrinho
//         cartItem.querySelector('.delete-icon-carrinho').addEventListener('click', () => {
//             removeItemFromCart(item);
//             displayCartItems(); // Atualiza a exibição
//         });

//         cartList.appendChild(cartItem);
        
//     });
//     // function updateCartSummary() {
//     //     const cartItems = loadCartFromLocalStorage(); // Carrega os itens do carrinho do localStorage
//     //     const carttotal = calculateTotal(cartItems);
//     //     cartTotalElement.textContent = carttotal;
    
//     //     // Mostra ou oculta o resumo do carrinho
//     //     if (cartItems.length > 0) {
//     //         cartSummary.style.display = 'flex';
//     //     } else {
//     //         cartSummary.style.display = 'none';
//     //     }
//     // }
//     function updateCartSummary() {
//         const cartItems = loadCartFromLocalStorage(); // Carrega os itens do carrinho do localStorage
//         const cartTotal = calculateTotal(cartItems);
//         cartTotalElement.textContent = `Total: R$${cartTotal.toFixed(2)}`; // Formata o total com duas casas decimais
    
//         // Mostra ou oculta o resumo do carrinho
//         if (cartItems.length > 0) {
//             cartSummary.style.display = 'flex';
//         } else {
//             cartSummary.style.display = 'none';
//         }
//     }
    
//     // Chame essa função sempre que os itens do carrinho forem atualizados
// updateCartSummary();

// checkoutButton.addEventListener('click', function () {
//     alert('Compra realizada com sucesso!');
//     localStorage.removeItem('cart'); // Limpa o carrinho após a compra
//     displayCartItems();
// });

// // Inicializa a exibição do carrinho
// // displayCartItems();

// // // function calculateTotal(cartItems) {
// // //     return cartItems.reduce((carttotal, item) => carttotal + item.price * item.quantity, 0);
// // // }
// // function calculateTotal(cartItems) {
// //     return cartItems.reduce((carttotal, item) => {
// //         const price = parseFloat(item.price.replace('R$', '').replace(',', '.')) || 0;
// //         return carttotal + (price * item.quantity);
// //     }, 0);
// // }
// // Função para calcular o total do carrinho
// function calculateTotal(cartItems) {
//     return cartItems.reduce((carttotal, item) => {
//         const price = parseFloat(item.price.replace('R$', '').replace(',', '.')) || 0;
//         return carttotal + (price * item.quantity);
//     }, 0);
// }

    
// // }
// function displayCartItems() {
//     const cartList = document.querySelector('.Carrinho-p-list');
//     const cartItems = loadCartFromLocalStorage();

//     cartList.innerHTML = '';

//     cartItems.forEach(item => {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('Carrinho-p-item');

//         cartItem.innerHTML = `
//             <h3>${item.name}</h3>
//             <p>${item.description}</p>
//             <p><strong>Quantidade:</strong> ${item.quantity}</p>
//             <p><strong>Preço:</strong> R${(item.price)}</p>
//             <i class="delete-icon-carrinho">❌</i>
//         `;

//         cartItem.querySelector('.delete-icon-carrinho').addEventListener('click', () => {
//             removeItemFromCart(item);
//             displayCartItems(); // Atualiza a exibição
//         });

//         cartList.appendChild(cartItem);
//     });

//     updateCartSummary();
// }


// // Função para remover um item específico do carrinho
// function removeItemFromCart(itemToRemove) {
//     let cart = loadCartFromLocalStorage();
//     cart = cart.filter(item => item.name !== itemToRemove.name || item.description !== itemToRemove.description);
//     saveCartToLocalStorage(cart);
// }

// // Chama a função para exibir os itens ao carregar a página do carrinho
// document.addEventListener('DOMContentLoaded', displayCartItems);

// document.addEventListener('DOMContentLoaded', function() {
//     function getQueryParam(param) {
//         let params = new URLSearchParams(window.location.search);
//         return params.get(param);
//     }

//     let tab = getQueryParam('tab');
//     if (tab === 'myAddress') {
//         document.querySelector('[data-section="myAddress"]').classList.add('active');
//         document.querySelector('#Informações-pessoais').style.display = 'none';
//         document.querySelector('#myAddress').style.display = 'block';
//     }
// });
// Seleciona todos os botões "Adicionar ao carrinho" nos cards
const addToCartButtons = document.querySelectorAll('.flip-box-back button');

// Adiciona um evento de clique a cada botão
const myAddressSection = document.getElementById('myAddress');
const cartList = document.querySelector('.Carrinho-p-list');
const cartTotalElement = document.getElementById('carttotal');
const checkoutButton = document.getElementById('checkout-button');
const cartSummary = document.getElementById('cart-summary');

// Função para mostrar uma seção e ocultar as outras
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Adiciona um evento de clique a cada botão
function saveCartToLocalStorage(items) {
    localStorage.setItem('cart', JSON.stringify(items));
}

// Função para carregar o carrinho do localStorage
function loadCartFromLocalStorage() {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
}

// Função para adicionar um item ao carrinho
function addItemToCart(event) {
    const card = event.target.closest('.card-li');
    const productName = card.querySelector('h3').innerText;
    const productDescription = card.querySelector('p').innerText;
    const productPrice = card.querySelector('.price').innerText;
    const productQty = parseInt(card.querySelector('.qty-count').value);

    // Carrega o carrinho do localStorage
    const cart = loadCartFromLocalStorage();

    // Verifica se o item já existe no carrinho
    const existingItem = cart.find(item => item.name === productName && item.description === productDescription);

    if (existingItem) {
        existingItem.quantity += productQty; // Atualiza a quantidade
    } else {
        cart.push({
            name: productName,
            description: productDescription,
            price: productPrice,
            quantity: productQty
        });
    }

    // Salva o carrinho no localStorage
    saveCartToLocalStorage(cart);

    // Atualiza a exibição do carrinho
    window.location.href = 'Carrinho.html?tab=myAddress';
}

// Adiciona um evento de clique a cada botão "Adicionar ao carrinho"
addToCartButtons.forEach(button => {
    button.addEventListener('click', addItemToCart);
});

// Função para atualizar o resumo do carrinho
function displayCartItems() {
    const cartItems = loadCartFromLocalStorage();
    cartList.innerHTML = ''; // Limpa a lista do carrinho

    // Calcula o total do carrinho
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('Carrinho-p-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Quantidade:</strong> ${item.quantity}</p>
            <p><strong>Preço:</strong> ${item.price}</p>
            <i class="delete-icon-carrinho">❌</i>
        `;

        // Adiciona um evento de clique para remover o item do carrinho
        cartItem.querySelector('.delete-icon-carrinho').addEventListener('click', () => {
            removeItemFromCart(item);
            displayCartItems(); // Recarrega os itens do carrinho
        });

        cartList.appendChild(cartItem);
    });

    // Atualiza o resumo do carrinho
    updateCartSummary();
}

// Função para remover um item específico do carrinho
function updateCartSummary() {
    const cartItems = loadCartFromLocalStorage();
    const cartTotal = calculateTotal(cartItems);
    cartTotalElement.textContent = `Total: R$${cartTotal.toFixed(2)}`; // Formata o total com duas casas decimais

    // Exibe ou oculta o resumo do carrinho com base na quantidade de itens
    cartSummary.style.display = cartItems.length > 0 ? 'flex' : 'none';
}

// Função para calcular o total do carrinho
function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.')) || 0;
        return total + (price * item.quantity);
    }, 0);
}

// Função para remover um item específico do carrinho
function removeItemFromCart(itemToRemove) {
    let cart = loadCartFromLocalStorage();
    cart = cart.filter(item => !(item.name === itemToRemove.name && item.description === itemToRemove.description));
    saveCartToLocalStorage(cart);
}

// Adiciona um evento de clique ao botão "Checkout"
checkoutButton.addEventListener('click', function () {
    alert('Compra realizada com sucesso!');
    localStorage.removeItem('cart'); // Limpa o carrinho após a compra
    displayCartItems();
});

// Inicializa o resumo do carrinho
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();

    // Verifica se o parâmetro "tab" está presente na URL
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'myAddress') {
        showSection('myAddress');
    }
});
