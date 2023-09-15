import { IProduct } from "@/types/products.interface";
import styles from "./Card.module.css";
import Image from "next/image";
import { capitalizeWords } from "@/helpers/capitalizeWords";

interface IProps {
  key: string;
  clothes: IProduct;
}

export default function Card({ key, clothes }: IProps) {
  return (
    <>
      <li key={clothes.name} className={styles.card}>
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
            <button className={styles.addToCart}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </li>
    </>
  );
}
