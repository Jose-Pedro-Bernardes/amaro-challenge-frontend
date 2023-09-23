import { IProductCart } from "@/types/products.interface";
import removeCurrencyFormatting from "./removeCurrencyFormatting.helper";
import formatPrice from "./formatPrice.helper";

export default function sumAllPrices(
  cart: IProductCart[],
  regular: boolean
): string {
  if (regular) {
    const sum = cart.reduce((prevValue: number, currentValue: IProductCart) => {
      const priceNumber = removeCurrencyFormatting(currentValue.regular_price);
      return (prevValue + priceNumber) * currentValue.count;
    }, 0);

    return formatPrice(sum);
  }
  const sum = cart.reduce((prevValue: number, currentValue: IProductCart) => {
    const priceNumber = removeCurrencyFormatting(currentValue.actual_price);
    return (prevValue + priceNumber) * currentValue.count;
  }, 0);

  return formatPrice(sum);
}
