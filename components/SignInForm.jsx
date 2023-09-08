"use client";

import { useEffect, useState } from "react";
import styles from "../styles/SignInForm.module.css";
import Already from "./Already";
import { login } from "@/app/api/login/route";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Toast from "./Toast";
export default function SignInForm() {
  const [showForgot, setShowForgot] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length < 6) {
      setShowToast(true);
    }
    if (password.length < 6) {
      return toast.error("Le mot de passe doit contenir au moins 6 caractères");
    }

    const res = login();
    const json = await res.json();

    toast.success(
      "Votre compte a été bien enregistré! Veuillez vous connecter"
    );
    if (json.error) {
      return setShowForgot(true);
    }
    router.push("/");
  };
  if (!mounted) {
    return <span>Loading...</span>;
  }
  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
      {showToast && <Toast label={"Email trop court!"} />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <h1>Se connecter</h1>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onBlur={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              afficher
            </span>
          </div>
        </div>
        {showForgot && (
          <div className={styles.forgot}>Mot de passe oublié?</div>
        )}
        <div className={styles.submit}>
          <button type="submit">Envoyer</button>
        </div>
        <Already
          href={"/auth/register"}
          label={"N'a pas encore de compte? "}
          link={"S'inscrire"}
        />
      </form>
    </div>
  );
}
