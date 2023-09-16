import { IProduct } from "@/types/products.interface";

export interface IPropsFilters {
  clothes: IProduct[];
  setFilteredClothes: (filteredClothes: IProduct[]) => void;
}
