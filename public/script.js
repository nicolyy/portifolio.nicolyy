document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var transicaoElemento = document.querySelector('.transicao-elemento');
      var scrollTop = window.scrollY;
  
      // Altera a propriedade transform com base no valor do scrollTop
      transicaoElemento.style.transform = 'translateY(' + (100 - scrollTop) + '%)';
    });
  });