import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <div className={styles.logo}>
      <img src={rocketLogo} />
      <span>
        <strong>to</strong>
        <strong>do</strong>
      </span>
    </div>
  );
}
