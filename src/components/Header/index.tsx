import { IHeaderProps } from "./header.interface";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export function Header({ search, setSearch, cartCount }: IHeaderProps) {
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
            <p className={styles.cart_count}>{cartCount}</p>
          </Link>
        </div>
        <form className={styles.boxInputSearch}>
          <input
            value={search}
            className={styles.searchInput}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="O que você está procurando?"
          />
          <button type={"button"} className={styles.buttonSearch}>
            {" "}
            <Image
              src={"/images/lupa.svg"}
              alt="Botão para pesquisar uma Roupa"
              width={20}
              height={20}
              layout="responsive"
            />
          </button>
        </form>
      </div>
    </header>
  );
}
