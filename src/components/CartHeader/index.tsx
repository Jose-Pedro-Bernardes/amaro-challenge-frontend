import Link from "next/link";
import React from "react";
import styles from "./CartHeader.module.css";
import Image from "next/image";

export function CartHeader() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_align}>
        <Link className={styles.button_back} href={"/"}>
          <Image
            src={"/images/buttonBack.png"}
            alt="Botão para voltar para página inicial."
            width={22}
            height={22}
          />
          <p>Voltar</p>
        </Link>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/images/amaroLogo.svg"}
            alt="Botão para voltar para página inicial."
            width={139}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
}
