import Logo from "../../assets/Logo.png";
import { IoCart } from "react-icons/io5";
import styles from "./style.module.scss";

export function Header({ setIsOpen, counter }) {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Burguer Kenzie Logo" />
        <div className={styles.cartBox}>
          <button onClick={() => setIsOpen(true)}>
            <IoCart size={32} />
          </button>
          <span>{counter}</span>
        </div>
      </div>
    </header>
  );
}
