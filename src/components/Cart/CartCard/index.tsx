import React from "react";
import styles from "./CartCard.module.css";
import Image from "next/image";
import { IProductCart } from "@/types/products.interface";

interface IProps {
  product: IProductCart;
}

export default function CartCard({ product }: IProps) {
  return (
    <>
      <li className={styles.card}>
        <button className={styles.remove_from_cart}>x</button>
        <Image
          src={product.image}
          alt="Imagem do produto."
          width={100}
          height={100}
        />
        <div className={styles.card_box_align}>
          <h3 className={styles.product_name}>{product.name}</h3>
          <p className={styles.product_size}>Tamanho: {product.selectedSize}</p>
          <div className={styles.card_box_end_align}>
            <div className={styles.product_count_box}>
              <button className={styles.button_plus}>+</button>
              <p className={styles.product_count}>1</p>
              <button className={styles.button_less}>-</button>
            </div>
            <div className={styles.price_box}>
              <p className={styles.regular_price}>{product.regular_price}</p>
              <p className={styles.actual_price}>{product.actual_price}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}