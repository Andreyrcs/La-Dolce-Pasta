// cria os vetores para armazenar os dados do backend
var ids_pratos=[];
var pratos = [];
var desc_pratos = [];
var precos_pratos = [];
var fotos_pratos = [];
var categorias_pratos = [];
var promocoes_pratos = [];

//cria o evento que será executado qdo carrega a pagina
window.onload=()=>{
    pesquisa_la_dolce();
};
//cria  a função pesquisa la_dolce, que traz os dados do back
function pesquisa_la_dolce(){
    //faz a requisição ao backend
    fetch('http://localhost:8000/la_dolce/')
    //transforma a resposta em json
    .then(response=>response.json())
    //manipula os dados retornados do backend
    .then(data=>{
        //pega o grid dos produtos
        const div_pratos = 
        document.getElementById('grid');
        //estrutura de repetição para alimentar os vetores
        for(var i=0;i<data.length;i++){
            //push adiciona um item no final do vetor
            ids_pratos.push(data[i].id);
            pratos.push(data[i].prato);
            desc_pratos.push(data[i].descricao);
            precos_pratos.push(data[i].preco);
            fotos_pratos.push(data[i].foto);
            categorias_pratos.push(data[i].categoria);
            promocoes_pratos.push(data[i].promocao);
        }
        //estrutura de repetição para montar os cards na tela
        for(var j=0;j<ids_pratos.length;j++){
            //variaveis para cada prato
            var id = ids_pratos[j];
            var prato = pratos[j];
            var descricao = desc_pratos[j];
            var preco = precos_pratos[j];
            var foto = fotos_pratos[j];
            var categoria = categorias_pratos[j];
            var promocao = promocoes_pratos[j];
            //cria os cards na tela
            var card_prato = document.createElement('div');
            card_prato.setAttribute('class', 'cardc');
           
            
            card_prato.innerHTML =   '<div class="container">'+
            '<a href="Produtos.html?id='+id+'">'+
                '<div class="card-li">'+
                
                    '<div class="img-container">'+
                    
                        '<img src="Assents/img/'+foto+'" alt="image" />'+
                    '</div>'+
                   '<div class="actions">'+
                        '<a href="" class="favorite">'+
                            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">'+
                                '<path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>'+
                            '</svg>'+
                        '</a>'+
                    '</div>'+
                    '<h3>'+prato+'</h3>'+
                    '<p>'+descricao+'</p>'+
                    '<div class="linha-qty"><div class="qty-container">'+
                        '<button type="button" class="qty-count-minus">-</button>'+
                        '<input type="number" class="qty-count" min="0" max="10" value="1">'+
                       '<button type="button" class="qty-count-plus">+</button>'+
                    '</div></div>'+
                    
                    '<div class="flip-container">'+
                        '<div class="flip-box">'+
                            '<div class="flip-box-front">'+
                                '<ins>'+
                                    '<span class="price">'+preco+'</span>'+
                                '</ins>'+
                            '</div>'+
                            '<div class="flip-box-back">'+
                                '<button><i class="fa-solid fa-cart-shopping"></i><p>Adicionar ao carrinho</p></button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
               '</div>'+
            '</a></div>';
  
          
            //adicionar o card no grid
            div_pratos.appendChild(card_prato);

        }
    })
    .catch(error=>{
        alert("Erro: "+error);
    });
}