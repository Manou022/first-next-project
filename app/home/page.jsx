import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  console.log("test");
  return (
    <div>
      <Link href={"/auth/login"} className={styles.login}>
        Login
      </Link>
      <Link href={"/auth/register"} className={styles.register}>
        Register
      </Link>
    </div>
  );
}
