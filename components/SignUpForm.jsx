import styles from "../styles/SignUpForm.module.css";
import Already from "./Already";
export default function SignUpForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.title}>
          <h1>S'inscrire</h1>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <label htmlFor="email">Email *</label>
            <input type="text" id="email" />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password *</label>
            <input type="text" id="password" />
          </div>
          <div className={styles.input}>
            <label htmlFor="cpassword">Confirm password *</label>
            <input type="text" id="cpassword" />
          </div>
        </div>
        <div className={styles.submit}>
          <button type="submit">Envoyer</button>
        </div>
        <Already
          href={"/auth/login"}
          label={"A déjà un compte enregistré? "}
          link={"Se connecter"}
        />
      </form>
    </div>
  );
}
