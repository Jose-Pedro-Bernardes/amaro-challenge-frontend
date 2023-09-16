import React from "react";
import styles from "./FiltersSection.module.css";
import { IProduct } from "@/types/products.interface";
import { IPropsFilters } from "./filterSection.interface";

export function FiltersSection({ clothes, setFilteredClothes }: IPropsFilters) {
  function filteredSaleProduct(clothes: IProduct[]) {
    if (!clothes) {
      setFilteredClothes([]);
    }
    const filter = clothes.filter((product) => product.on_sale === true);
    setFilteredClothes(filter);
  }
  return (
    <>
      <section className={styles.filter_container}>
        <ul className={styles.filterBox}>
          <li>
            <button
              onClick={() => filteredSaleProduct([])}
              className={styles.filter}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              onClick={() => filteredSaleProduct(clothes)}
              className={styles.filter}
            >
              Em Promoção
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
