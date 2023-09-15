import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import styles from "../styles/index.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { FiltersSection } from "@/components/FiltersSection";
import { products } from "../data/products.json";
import { IProduct } from "@/types/products.interface";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clothes, setClothes] = useState<IProduct[]>([]);
  const [allClothes, setAllClothes] = useState<IProduct[]>([]);
  const [searchValue, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const products_list = products;
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    function clothesList() {
      setClothes(products_list);
      setAllClothes(products_list);
    }

    clothesList();
  }, [products_list]);

  function searchClothes(products_list: IProduct[]) {
    if (searchValue === "") {
      setClothes(allClothes);
      return;
    }
    const filteredClothes = clothes.filter(
      (clothes) =>
        clothes.name
          .normalize("NFD")
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, "")
          .includes(searchValue) ||
        clothes.style
          .normalize("NFD")
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, "")
          .includes(searchValue)
    );

    setSearchResult(searchValue);
    setClothes(filteredClothes);
    setSearch("");
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const normalizedValue = inputValue
      .normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "");
    setSearch(normalizedValue);
  }

  function handleSubmit(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    searchClothes(allClothes);
  }

  function showAllClothes() {
    setClothes(allClothes);
  }

  function addToCart(product: IProduct) {
    if (!cart.find((productF: IProduct) => productF.name === product.name)) {
      setCart([...cart, product]);
    }
  }

  function removeProduct(name: string) {
    setCart(cart.filter((product) => product.name !== name));
  }

  function removeAllCart() {
    setCart([]);
  }
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <h1 className={styles.title}>Roupas Femininas</h1>
        <FiltersSection />
        <section className={styles.section__products}>
          <ul className={styles.products_list}>
            {clothes.map((product) => (
              <Card key={product.name} clothes={product} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
