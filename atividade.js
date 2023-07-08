let pagamento = "Pix";

switch (pagamento) {
    case "Debito":
    console.log("Recebe 10% de desconto");
    break;
    case "Dinheiro ou Pix":
    console.log("Recebe 15% de desconto");
    break;
    case "Até 2x":
    console.log("Sem juros");
    case "Mais de 2x":
    console.log("10% de juros");
    break;
    default:
    console.log("Não aceitamos essa forma de pagamento");
    break;
}