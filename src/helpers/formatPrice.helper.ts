export default function formatPrice(value: number): string {
  // Formata o número com duas casas decimais e adiciona "R$" como prefixo.
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
