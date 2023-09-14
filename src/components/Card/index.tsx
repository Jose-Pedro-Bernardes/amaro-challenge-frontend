import { IProduct } from "@/types/products.interface";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface IProps {
  key: string;
  product: IProduct;
}

const first = {
  name: "VESTIDO TRANSPASSE BOW",
  style: "20002605",
  code_color: "20002605_613",
  color_slug: "tapecaria",
  color: "TAPEÇARIA",
  on_sale: false,
  regular_price: "R$ 199,90",
  actual_price: "R$ 199,90",
  discount_percentage: "",
  installments: "3x R$ 66,63",
  image:
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
  sizes: [
    {
      available: false,
      size: "PP",
      sku: "5807_343_0_PP",
    },
    {
      available: true,
      size: "P",
      sku: "5807_343_0_P",
    },
    {
      available: true,
      size: "M",
      sku: "5807_343_0_M",
    },
    {
      available: true,
      size: "G",
      sku: "5807_343_0_G",
    },
    {
      available: false,
      size: "GG",
      sku: "5807_343_0_GG",
    },
  ],
};

const second = {
  name: "VESTIDO FRANZIDO RECORTES",
  style: "20001609",
  code_color: "20001609_029",
  color_slug: "preto",
  color: "PRETO",
  on_sale: true,
  regular_price: "R$ 139,90",
  actual_price: "R$ 69,90",
  discount_percentage: "50%",
  installments: "2x R$ 34,95",
  image:
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20001609_002_catalog_1.jpg?",
  sizes: [
    {
      available: true,
      size: "PP",
      sku: "3627_40130843_0_PP",
    },
    {
      available: true,
      size: "P",
      sku: "3627_40130843_0_P",
    },
    {
      available: true,
      size: "M",
      sku: "3627_40130843_0_M",
    },
    {
      available: false,
      size: "G",
      sku: "3627_40130843_0_G",
    },
    {
      available: false,
      size: "GG",
      sku: "3627_40130843_0_GG",
    },
  ],
};

export default function Card() {
  const [sale, setSale] = useState(false);

  function onSaleOrRegular(regularPrice: string, actualPrice: string) {
    if (regularPrice !== actualPrice) {
      setSale(true);
    }
  }
  return (
    <>
      <li className={styles.card}>
        <figure>
          <Image src={second.image} alt={first.name} width={450} height={250} />
        </figure>
        <div>
          <div>
            <h2>{first.name}</h2>
            <p>{first.color_slug}</p>
            <h3>{first.actual_price}</h3>
          </div>
        </div>
      </li>
    </>
  );
}
