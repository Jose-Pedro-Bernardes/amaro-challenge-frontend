import React from "react";
import styles from "./FiltersSection.module.css";
export function FiltersSection({}) {
  return (
    <>
      <section className={styles.filter_container}>
        <ul className={styles.filterBox}>
          <li>
            <button className={styles.filter}>Todas</button>
          </li>
          <li>
            <button className={styles.filter}>Em Promoção</button>
          </li>
        </ul>
      </section>
    </>
  );
}
