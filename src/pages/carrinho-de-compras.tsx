import { CartHeader } from "@/components/Cart/CartHeader";
import { useState, useEffect } from "react";
import styles from "../styles/carrinho-de-compras.module.css";
import React from "react";
import Link from "next/link";
import CartCard from "@/components/Cart/CartCard";
import { v4 as uuid } from "uuid";
import { IProductCart } from "@/types/products.interface";
import sumAllPrices from "@/helpers/sumAllPrices.helper";

export default function CartPage() {
  const [cart, setCart] = useState<IProductCart[]>([]);

  useEffect(() => {
    const getCartItems = () => {
      const storedCart = localStorage.getItem("@Amaro:Cart");
      const cartArray = storedCart ? JSON.parse(storedCart) : [];
      return cartArray;
    };

    setCart(getCartItems());
  }, []);

  function removeFromCart(name: string) {
    const updatedCart = cart.filter((product) => product.name !== name);
    setCart(updatedCart);

    localStorage.setItem("@Amaro:Cart", JSON.stringify(updatedCart));
  }

  // function removeAllCart() {
  //   setCart([]);
  // }
  return (
    <div>
      <CartHeader />
      <main className={styles.main_container}>
        <section className={styles.main_header}>
          <h1 className={styles.title}>Sacola ({0})</h1>
          <Link className={styles.back_to_home} href={"/"}>
            Continue comprando
          </Link>
        </section>
        <div className={styles.main__align_itens}>
          <section className={styles.cart_wrapper}>
            <ul className={styles.cart}>
              {cart.length === 0 ? (
                <p>Nada no carrinho</p>
              ) : (
                cart.map((product) => (
                  <CartCard
                    key={uuid()}
                    product={product}
                    removeFromCart={removeFromCart}
                  />
                ))
              )}
            </ul>
          </section>
          <section className={styles.purchase_summary}>
            <div className={styles.pucharse_resume_box}>
              <h3 className={styles.title_resume}>Resumo de compra</h3>
              <div className={styles.subtotal_box}>
                <p className={styles.subtotal_text}>Subtotal</p>
                <p className={styles.subtotal_price}>{sumAllPrices(cart)}</p>
              </div>
            </div>
            <div className={styles.total_price_container}>
              <div className={styles.total_price_box}>
                <p className={styles.total_price_text}>Total a pagar</p>
                <p className={styles.total_price}>{sumAllPrices(cart)}</p>
              </div>
              <button className={styles.button_buy}>Finalizar compra</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
