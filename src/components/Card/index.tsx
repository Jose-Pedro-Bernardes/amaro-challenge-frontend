import styles from "./Card.module.css";
import Image from "next/image";
import { capitalizeWords } from "@/helpers/capitalizeWords";
import { CheckBox } from "./CheckBox";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { IPropsCard } from "./card.interface";

export default function Card({ clothes, addToCart }: IPropsCard) {
  const [selectedSize, setSelectedSize] = useState("");
  const { style, code_color, color, sizes, ...productCart } = clothes;
  const returnProductCart = { ...productCart, selectedSize };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <>
      <li className={styles.card}>
        {clothes.on_sale && (
          <div className={styles.percentage_box}>
            <p>-{clothes.discount_percentage}</p>
          </div>
        )}
        <figure>
          <Image
            src={clothes.image}
            alt={clothes.name}
            width={450}
            height={250}
            layout="responsive"
          />
        </figure>
        <div>
          <div className={styles.card_text__align}>
            <h2 className={styles.product_name}>
              {capitalizeWords(clothes.name)}
            </h2>
            <div className={styles.price_line}>
              <h3 className={styles.price}>{clothes.actual_price}</h3>
              {clothes.on_sale && (
                <p className={styles.promo}>{clothes.regular_price}</p>
              )}
            </div>
            <p className={styles.installments}>{clothes.installments}</p>
            <div className={styles.checkboxes_align}>
              {clothes.sizes
                .filter((size) => size.available === true)
                .map((size) => (
                  <CheckBox
                    key={uuid()}
                    size={size.size}
                    selectedSize={selectedSize}
                    onSelectSize={handleSelectSize}
                  />
                ))}
            </div>
            <button
              type="button"
              onClick={() => addToCart(returnProductCart)}
              className={styles.addToCart}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
