import { Header } from "@/components/Header";
import styles from "../styles/index.module.css";
import { useEffect, useState } from "react";
import { FiltersSection } from "@/components/FiltersSection";
import { products } from "../data/products.json";
import { IProduct, IProductCart } from "@/types/products.interface";
import Card from "@/components/Card";
import { v4 as uuid } from "uuid";
import { callTheToast } from "@/helpers/callTheToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { limitReached } from "@/helpers/callTheAlert";

export default function Home() {
  const [clothes, setClothes] = useState<IProduct[]>([]);
  const [filteredClothes, setFilteredClothes] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const productsList = products;

  useEffect(() => {
    setClothes(productsList);
  }, [productsList]);

  useEffect(() => {
    const getCartItems = () => {
      const storedCart = localStorage.getItem("@Amaro:Cart");
      const cartArray = storedCart ? JSON.parse(storedCart) : [];
      return cartArray.length;
    };

    setCartCount(getCartItems());
  }, []);

  useEffect(() => {
    setFilteredClothes([]);
    const normalizedSearchText = search
      .normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "");

    const filtered = clothes.filter((clothesItem) =>
      clothesItem.name
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizedSearchText)
    );

    setFilteredClothes(filtered);
  }, [clothes, search]);

  function addToCart(product: IProductCart) {
    if (!product.selectedSize || product.selectedSize === "") {
      return;
    }

    let cart: string | null = localStorage.getItem("@Amaro:Cart");
    if (!cart) {
      cart = "[]";
    }
    const cartArray: IProductCart[] = JSON.parse(cart);
    if (cartArray.length > 15) {
      limitReached(
        "Você alcançou o limite máximo de 15 produtos únicos no carrinho de compras!"
      );
      return;
    }

    const productIndex = cartArray.findIndex(
      (p) =>
        p.name === product.name &&
        p.selectedSize === product.selectedSize &&
        p.color === product.color
    );

    if (productIndex !== -1) {
      if (cartArray[productIndex].count < 5) {
        cartArray[productIndex].count += 1;
        callTheToast();
        localStorage.setItem("@Amaro:Cart", JSON.stringify(cartArray));
        setCartCount(cartCount + 1);
      } else {
        limitReached("Produto já atingiu o limite de 5 unidades.");
      }
    } else {
      product.count = 1;
      cartArray.push(product);
      callTheToast();
      localStorage.setItem("@Amaro:Cart", JSON.stringify(cartArray));
      setCartCount(cartCount + 1);
    }
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} cartCount={cartCount} />

      <main className={styles.main_container}>
        <h1 className={styles.title}>Roupas e Acessórios Femininos</h1>
        <FiltersSection
          clothes={clothes}
          setFilteredClothes={setFilteredClothes}
        />
        <section className={styles.section__products}>
          <ul className={styles.products_list}>
            {filteredClothes.length > 0
              ? filteredClothes.map((product) => (
                  <Card key={uuid()} clothes={product} addToCart={addToCart} />
                ))
              : clothes.map((product) => (
                  <Card key={uuid()} clothes={product} addToCart={addToCart} />
                ))}
          </ul>
        </section>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
