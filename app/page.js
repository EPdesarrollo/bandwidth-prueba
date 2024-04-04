import Image from "next/image";
import styles from "./page.module.css";
import Buttons from "@/components/Buttons";

export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.center}>
        <Buttons/>
      </div>

      
    </main>
  );
}
