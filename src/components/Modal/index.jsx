import { IoClose } from "react-icons/io5";
import styles from "./style.module.scss";

export function Modal({ children, totalPrice, setIsOpen, clearCart }) {
  return (
    <div role="dialog" className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h1 className="title white">Carrinho de compras</h1>
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={21} />
          </button>
        </div>
        <div>{children}</div>
        <div className={styles.modalFooter}>
          <div>
            <p className="paragraph total">Total</p>
            <p className="paragraph">
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <button onClick={() => clearCart()}>Remover todos</button>
        </div>
      </div>
    </div>
  );
}
