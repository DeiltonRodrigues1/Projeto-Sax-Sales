// Adicione um evento de clique ao botão "ADICIONAR AO CARRINHO"
var adicionarAoCarrinhoBtn = document.querySelector('button');
adicionarAoCarrinhoBtn.addEventListener('click', function() {
  // Lógica para adicionar o item ao carrinho
  console.log('Item adicionado ao carrinho!');
});

// Adicione um evento de clique aos botões "+" e "-"
var quantidadeInput = document.querySelector('div p');
var adicionarBtn = document.querySelector('.bi-plus-square');
var removerBtn = document.querySelector('.bi-dash-square');

adicionarBtn.addEventListener('click', function() {
  var quantidade = parseInt(quantidadeInput.innerText);
  quantidade++;
  quantidadeInput.innerText = quantidade;
});

removerBtn.addEventListener('click', function() {
  var quantidade = parseInt(quantidadeInput.innerText);
  if (quantidade > 1) {
    quantidade--;
    quantidadeInput.innerText = quantidade;
  }
});