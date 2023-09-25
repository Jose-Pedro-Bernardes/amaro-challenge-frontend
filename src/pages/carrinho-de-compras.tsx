import { CartHeader } from "@/components/Cart/CartHeader";
import { useState, useEffect } from "react";
import styles from "../styles/carrinho-de-compras.module.css";
import React from "react";
import Link from "next/link";
import CartCard from "@/components/Cart/CartCard";
import { v4 as uuid } from "uuid";
import { IProductCart } from "@/types/products.interface";
import sumAllPrices from "@/helpers/sumAllPrices.helper";
import Image from "next/image";
import { finalizeAlert } from "@/helpers/callTheAlert";
import Button from "@/components/Button";

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

  function removeFromCart(productToRemove: IProductCart) {
    const updatedCart = cart.filter((product) => {
      return (
        product.name !== productToRemove.name ||
        product.selectedSize !== productToRemove.selectedSize ||
        product.color !== productToRemove.color
      );
    });

    setCart(updatedCart);

    localStorage.setItem("@Amaro:Cart", JSON.stringify(updatedCart));
  }

  function finalizePurchase() {
    finalizeAlert();
    setTimeout(() => {
      setCart([]);
      localStorage.removeItem("@Amaro:Cart");
    }, 2000); // 2
  }

  function updateProductCount(product: IProductCart, newCount: number): void {
    const updatedCart = cart.map((item) =>
      item.name === product.name &&
      item.selectedSize === product.selectedSize &&
      item.color === product.color
        ? { ...item, count: newCount }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("@Amaro:Cart", JSON.stringify(updatedCart));
  }

  const handleIncrement = (product: IProductCart) => {
    if (product.count < 5) {
      const newCount = product.count + 1;
      updateProductCount(product, newCount);
    }
  };

  const handleDecrement = (product: IProductCart) => {
    if (product.count > 1) {
      const newCount = product.count - 1;
      updateProductCount(product, newCount);
    }
  };

  return (
    <>
      <CartHeader />
      <main className={styles.main_container}>
        <div className={styles.main__align_itens}>
          <div className={styles.cart_section_container}>
            <section className={styles.main_header}>
              <h1 className={styles.title}>Sacola ({cart.length})</h1>
              <Link className={styles.back_to_home} href={"/"}>
                Continue comprando
              </Link>
            </section>
            <section className={styles.cart_wrapper}>
              <ul className={styles.cart}>
                {cart.length === 0 ? (
                  <li className={styles.emptyCart}>
                    <p className={styles.emptyCart_text}>
                      Seu carrinho está vazio...
                    </p>
                    <Image
                      src={"/images/carrinho-vazio.jpg"}
                      alt="imagem de um carrinho de compras vazio."
                      width={200}
                      height={200}
                    />
                  </li>
                ) : (
                  cart.map((product) => (
                    <CartCard
                      key={uuid()}
                      product={product}
                      removeFromCart={removeFromCart}
                      handleIncrement={handleIncrement}
                      handleDecrement={handleDecrement}
                    />
                  ))
                )}
              </ul>
            </section>
          </div>
          {!(cart.length === 0) && (
            <section className={styles.purchase_summary}>
              <div className={styles.pucharse_resume_box}>
                <h3 className={styles.title_resume}>Resumo de compra</h3>
                <div className={styles.subtotal_box}>
                  <p className={styles.subtotal_text}>Subtotal</p>
                  <p className={styles.subtotal_price}>
                    {sumAllPrices(cart, true)}
                  </p>
                </div>
              </div>
              <div className={styles.total_price_container}>
                <div className={styles.total_price_box}>
                  <p className={styles.total_price_text}>Total a pagar</p>
                  <p className={styles.total_price}>
                    {sumAllPrices(cart, false)}
                  </p>
                </div>
                <Button
                  onClick={finalizePurchase}
                  className={styles.button_buy}
                  text="Finalizar pedido"
                />
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
