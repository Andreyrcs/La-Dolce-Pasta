//para capturar o id passado no navegador
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//variavel para pegar o id na barra de endereços
var id = urlParams.get('id');

//função para ser chamada quando a página for carregada
window.onload=()=>{
    pesquisaPrato();
}
//função para chamar o backend com os dados do prato
function pesquisaPrato(){
    //faz a requisição ao backend passando o id do prato
    fetch('http://localhost:8000/la_dolce/'+id)
    //transforma a resposta em json
    .then(response=>response.json())
    //trata os dados e exibe o prato
    .then(data=>{
        //pega a div para exibir o prato
        const div_prato = document.getElementById('container');
        //variaveis para os dados do prato
        var id_prato = data.id;
        var prato = data.prato;
        var desc_prato = data.descricao;
        var preco_prato = data.preco;
        var foto_prato = data.foto;
        var categoria_prato = data.categoria;
        var promocao_prato = data.promocao;
        //cria um elemento no html para exibir o prato
        var card_prato = document.createElement('div');
        card_prato.innerHTML = '<div class="productPage__content">'+
        '<div class="productPage__contentTop">'+
            '<div class="productPage__title--mobile">La Dolce Pasta</div>'+
            '<div class="productPage__featuredImage">'+
                '<div class="product-image-slider">'+
                    '<div><img src="Assents/img/'+foto+'"></div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="ingredients">'+
            '<figure class="ingredients_item">'+
                '<img src="Assents/img/Captura de tela 2024-10-21 145906.png" alt="item1"/>'+
                '<figcaption>Macarrão</figcaption>'+
            '</figure>'+
            '<figure class="ingredients_item">'+
                '<img src="Assents/img/mussarela.png" alt="item2"/>'+
                '<figcaption>Queijo</figcaption>'+
            '</figure>'+
            '<figure class="ingredients_item">'+
                '<img src="Assents/img/Carne.jpg" alt="item3"/>'+
                '<figcaption>Carne</figcaption>'+
            '</figure>'+
            '<figure class="ingredients_item">'+
                '<img src="Assents/img/manjericão.png" alt="item4"/>'+
                '<figcaption>manjericão</figcaption>'+
            '</figure>'+
            '<figure class="ingredients_item">'+
                '<img src="Assents/img/" alt="item5"/>'+
                '<figcaption>Tomates</figcaption>'+
            '</figure>'+
        '</div>'+
        '<div class="productPage__contentBottom">'+
            '<div class="productPage__desciption">'+

                '<div class="productPage__title">'+prato+'</div>'+
                '<div class="productPage__subtitle">Um prato tradiconal e facil, mas que tem o melhor sabor</div>'+
                
                '<div class="productPage__descriptionTxt">'+
                    '<p>'+descricao+' </p>'+
                '</div>'+
            '</div>'+

            '<div class="productPage__price">R$'+preco+'</div>'+
            '<div class="linha-button4">'+
            '<button class="btn-4" data-tooltip="Size: 20Mb" id="buttoncar">'+
                '<div class="button-wrapper">'+
                  '<div class="text">Adicionar ao carrinho</div>'+
                  '<span class="icon">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#7a3030" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'+
                '</div>'+
            '</button>'+
            '</div>'+
            '</div>'+
    
   '</div>;'+
            //adiciona o card na div
            div_prato.appendChild(card_prato);
    })
    .catch(error=>{
        alert("Erro: "+error);
    });
}
