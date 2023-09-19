import { IProductCart } from "@/types/products.interface";
import removeCurrencyFormatting from "./removeCurrencyFormatting.helper";
import formatPrice from "./formatPrice.helper";

export default function sumAllPrices(cart: IProductCart[]): string {
  const sum = cart.reduce((prevValue: number, currentValue: IProductCart) => {
    const priceNumber = removeCurrencyFormatting(currentValue.actual_price);
    return prevValue + priceNumber;
  }, 0);

  return formatPrice(sum);
}
