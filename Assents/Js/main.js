

const qtyInput = document.querySelector('.qty-count');
const minusButton = document.querySelector('.qty-count-minus');
const plusButton = document.querySelector('.qty-count-plus');

minusButton.addEventListener('click', function () {
    let currentValue = parseInt(qtyInput.value);
    if (currentValue > 0) {
        qtyInput.value = currentValue - 1;
    }
});

plusButton.addEventListener('click', function () {
    let currentValue = parseInt(qtyInput.value);
    const maxValue = parseInt(qtyInput.max);
    if (currentValue < maxValue) {
        qtyInput.value = currentValue + 1;
    }
});

qtyInput.addEventListener('input', function () {
    let currentValue = parseInt(qtyInput.value);
    if (isNaN(currentValue) || currentValue < 0) {
        qtyInput.value = 0;
    }
});






function getPageList(totalPages, page, maxLength){
    function range(start, end){
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if(totalPages <= maxLength){
      return range(1, totalPages);
    }
  
    if(page <= maxLength - sideWidth - 1 - rightWidth){
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
  
    if(page >= totalPages - sideWidth - 1 - rightWidth){
      return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
  
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }
  
  $(function(){
    var numberOfItems = $(".card-content .cardc").length;
    var limitPerPage = 6; //How many card items visible per a page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7; //How many page elements visible in the pagination
    var currentPage;
  
    function showPage(whichPage){
      if(whichPage < 1 || whichPage > totalPages) return false;
  
      currentPage = whichPage;
  
      $(".card-content .cardc").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
      $(".pagination li").slice(1, -1).remove();
  
      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
      });
  
      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }
  
    $(".pagination").append(
      $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
      $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
    );
  
    $(".card-content").show();
    showPage(1);
  
    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
      return showPage(+$(this).text());
    });
  
    $(".next-page").on("click", function(){
      return showPage(currentPage + 1);
    });
  
    $(".previous-page").on("click", function(){
      return showPage(currentPage - 1);
    });
  });


  $(function(){
    var numberOfItems = $(".card-content .cardc").length;
    var limitPerPage = 6;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;
  
    // Hide pagination if there's only one page
    if (totalPages <= 1) {
      $(".pagination").hide();
      return;
    }
  
    function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;
  
      currentPage = whichPage;
  
      $(".card-content .cardc").hide()
        .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
      $(".pagination li").slice(1, -1).remove();
  
      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
          .toggleClass("active", item === currentPage)
          .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "..."))
          .insertBefore(".next-page");
      });
  
      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }
  
    $(".pagination").append(
      $("<li>").addClass("page-item previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
      $("<li>").addClass("page-item next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
    );
  
    $(".card-content").show();
    showPage(1);
  
    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
      return showPage(+$(this).text());
    });
  
    $(".next-page").on("click", function(){
      return showPage(currentPage + 1);
    });
  
    $(".previous-page").on("click", function(){
      return showPage(currentPage - 1);
    });
  });
   // Função para rolar até a seção desejada
   function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a seção
}
if (window.location.hash) {
  const sectionId = window.location.hash.substring(1); // Remove o "#"
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
  }
}