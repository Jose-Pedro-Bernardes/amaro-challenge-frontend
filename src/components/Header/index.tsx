import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header__container_align}>
        <div className={styles.header__sections_align}>
          <Image
            src={"/images/amaroLogo.svg"}
            alt="Amaro Logo"
            width={139}
            height={23}
            className={styles.imageAlign}
          />
        </div>
        <div className={styles.order_cart}>
          <Link className={styles.cart} href={"/carrinho-de-compras"}>
            <Image
              src="/images/cart.svg"
              alt="carrinho de compras"
              width={22}
              height={30}
            />
          </Link>
        </div>
        <div className={styles.boxInputSearch}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="O que você está procurando?"
          />
          <button className={styles.buttonSearch}>
            {" "}
            <Image
              src={"/images/lupa.svg"}
              alt="Botão para pesquisar uma Roupa"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
