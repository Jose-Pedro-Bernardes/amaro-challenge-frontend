import React from "react";
import styles from "./CartCard.module.css";
import Image from "next/image";
import { IProductCart } from "@/types/products.interface";
import { capitalizeWords } from "@/helpers/capitalizeWords";
import Button from "@/components/Button";

interface IProps {
  product: IProductCart;
  removeFromCart: (product: IProductCart) => void;
  handleIncrement: (product: IProductCart) => void;
  handleDecrement: (product: IProductCart) => void;
}

export default function CartCard({
  product,
  removeFromCart,
  handleIncrement,
  handleDecrement,
}: IProps) {
  return (
    <>
      <li className={styles.card}>
        <Button
          onClick={() => removeFromCart(product)}
          className={styles.remove_from_cart}
          text="x"
        />

        <Image
          src={product.image}
          alt="Imagem do produto."
          width={100}
          height={100}
        />
        <div className={styles.card_box_align}>
          <h3 className={styles.product_name}>
            {capitalizeWords(product.name)}
          </h3>
          <p className={styles.product_size}>Tamanho: {product.selectedSize}</p>
          <div className={styles.card_box_end_align}>
            <div className={styles.product_count_box}>
              <Button
                onClick={() => handleIncrement(product)}
                className={styles.button_plus}
                text="+"
              />

              <p className={styles.product_count}>{product.count}</p>
              <Button
                onClick={() => handleDecrement(product)}
                className={styles.button_less}
                text="-"
              />
            </div>
            {product.on_sale ? (
              <div className={styles.price_box}>
                <p className={styles.regular_price}>{product.regular_price}</p>
                <p className={styles.actual_price}>{product.actual_price}</p>
              </div>
            ) : (
              <div className={styles.price_box_end}>
                <p className={styles.actual_price}>{product.actual_price}</p>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
