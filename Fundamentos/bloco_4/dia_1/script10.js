
let custoDoProduto = 50;
let valorDeVenda = 100;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  let custoTotalDoProduto = custoDoProduto * 1.2;
  let lucro = (valorDeVenda - custoTotalDoProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Erro, os valores não podem ser negativos");
};