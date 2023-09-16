import { IProduct, IProductCart } from "@/types/products.interface";

export interface IPropsCard {
  clothes: IProduct;
  addToCart: (product: IProductCart) => any;
}

export interface IPropsCheckBox {
  size: string;
  selectedSize: string;
  onSelectSize: (size: string) => void;
}
