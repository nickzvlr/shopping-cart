let totalGeral = 0; // Armazena o valor total do carrinho.
resetCarrinho(); // Limpa o carrinho ao carregar a página.

function adicionar() {
  let produto = document.getElementById("produto").value; // Obtém o produto selecionado.
  let nomeProduto = produto.split("-")[0]; // Extrai o nome do produto.
  let valorUnitario = parseFloat(produto.split("R$")[1]); // Extrai o valor unitário.
  let quantidadeProduto = parseInt(document.getElementById("quantidade").value); // Obtém a quantidade.

  if (quantidadeProduto > 0) {
    // Verifica se a quantidade é válida.
    let preco = quantidadeProduto * valorUnitario; // Calcula o preço total do produto.
    let carrinho = document.getElementById("lista-produtos"); // Seleciona a lista de produtos.

    // Adiciona o produto ao carrinho.
    carrinho.innerHTML += `
      <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
      </section>`;

    totalGeral += preco; // Atualiza o total do carrinho.
    document.getElementById("valor-total").textContent = `R$ ${totalGeral}`; // Exibe o novo total.
    document.getElementById("quantidade").value = ""; // Limpa o campo de quantidade.
  } else {
    alert("Por favor, insira uma quantidade válida."); // Exibe alerta para quantidade inválida.
  }
}

function resetCarrinho() {
  totalGeral = 0; // Zera o total.
  document.getElementById("lista-produtos").innerHTML = ""; // Limpa a lista de produtos.
  document.getElementById("valor-total").textContent = "R$ 0"; // Reseta o valor total exibido.
  document.getElementById("quantidade").value = ""; // Limpa o campo de quantidade.
}
