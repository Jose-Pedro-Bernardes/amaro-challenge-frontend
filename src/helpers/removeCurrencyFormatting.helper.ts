export default function removeCurrencyFormatting(priceString: string): number {
  // Remove o "R$", espaços e vírgulas da string e a converte em um número.
  return Number(priceString.replace(/[^\d.,]/g, "").replace(",", "."));
}
