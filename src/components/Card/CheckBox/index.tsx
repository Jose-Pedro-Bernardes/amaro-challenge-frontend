import React, { useState } from "react";
import styles from "./CheckBox.module.css";
import { IPropsCheckBox } from "../card.interface";

export function CheckBox({ size, selectedSize, onSelectSize }: IPropsCheckBox) {
  const handleChange = () => {
    if (size === selectedSize) {
      onSelectSize("");
    } else {
      onSelectSize(size);
    }
  };
  return (
    <label className={styles.custom_checkbox}>
      <input
        type="checkbox"
        name="tamanho"
        value={size}
        checked={size === selectedSize}
        onChange={handleChange}
      />
      <span className={styles.checkbox_label}>{size}</span>
    </label>
  );
}
