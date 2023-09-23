export interface IProduct {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: {
    available: boolean;
    size: string;
    sku: string;
  }[];
}

export interface IProductCart {
  name: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  selectedSize: string;
  count: number;
}

export interface IProductList {
  products: IProduct[];
}
