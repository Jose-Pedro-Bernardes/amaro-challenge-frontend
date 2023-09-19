import { IProductCart } from "@/types/products.interface";
import removeCurrencyFormatting from "./removeCurrencyFormatting";

export default function totalValue(cart: IProductCart[]): number {
  const sum = cart.reduce((prevValue: number, currentValue: IProductCart) => {
    const priceNumber = removeCurrencyFormatting(currentValue.actual_price);
    return prevValue + priceNumber;
  }, 0);

  return sum;
}
