import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import React from "react";
import styles from "./Login.module.css";
import home from "../../../assets/home.png";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <Link href={"/home"} style={{ cursor: "pointer" }}>
        <div className={styles.img}>
          <Image fill src={home} alt="" className={styles.home} />
        </div>
      </Link>
      <SignInForm />
    </div>
  );
}
