import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header__container_align}>
        <div className={styles.header__sections_align}>
          <Image
            src={"/images/logoAmaroBlack.svg"}
            alt="Amaro Logo"
            width={100}
            height={22}
            className={styles.imageAlign}
          />
          <button>
            {" "}
            <Image
              src={"/images/menuHamburguer.svg"}
              alt="Menu de Filtragem"
              width={20}
              height={20}
            />
          </button>
          <div className={styles.header__filters_box}>
            <button type="button">Promoções</button>
            <button type="button">Todas as roupas</button>
          </div>
        </div>
        <div className={styles.boxInputSearch}>
          <input className={styles.searchInput} type="text" placeholder="123" />
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
        <div className={styles.header_top_end_box}>
          <button>
            <Image
              src={"/images/lupaBlack.svg"}
              alt="Botão pesquisar roupa."
              width={22}
              height={22}
            />
          </button>
          <Link href={"/carrinho-de-compras"}>
            <Image
              src="/images/cart.svg"
              alt="carrinho de compras"
              width={22}
              height={30}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
