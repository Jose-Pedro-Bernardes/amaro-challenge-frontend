import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { ChangeEvent, MouseEventHandler } from "react";
import { useState } from "react";

interface HeaderProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  inputValue: string;
}

export function Header({
  handleSearch,
  handleSubmit,
  inputValue,
}: HeaderProps) {
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
        <form className={styles.boxInputSearch}>
          <input
            value={inputValue}
            className={styles.searchInput}
            onChange={handleSearch}
            maxLength={40}
            type="text"
            placeholder="O que você está procurando?"
          />
          <button
            type={"button"}
            onClick={handleSubmit}
            className={styles.buttonSearch}
          >
            {" "}
            <Image
              src={"/images/lupa.svg"}
              alt="Botão para pesquisar uma Roupa"
              width={20}
              height={20}
            />
          </button>
        </form>
      </div>
    </header>
  );
}
