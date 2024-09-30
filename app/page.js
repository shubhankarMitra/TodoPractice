import Image from "next/image";
import styles from "./page.module.css";
import TodoApp from "./components/TodoApp";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     

      <TodoApp />

      </main>
     
    </div>
  );
}
