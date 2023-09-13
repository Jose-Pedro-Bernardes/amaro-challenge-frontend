import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import styles from "../styles/index.module.css";
import { FiltersSection } from "@/components/FiltersSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <FiltersSection />
      </main>
    </>
  );
}
