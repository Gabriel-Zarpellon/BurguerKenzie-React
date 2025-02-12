import { IoClose } from "react-icons/io5";
import styles from "./style.module.scss";
import { useOutclickModal } from "../../hooks/useOutclickModal";
import { useKeydownModal } from "../../hooks/useKeydownModal";

export function Modal({ children, totalPrice, setIsOpen, clearCart }) {
  let modalRef = useOutclickModal(() => {
    setIsOpen(false);
  });

  let buttonRef = useKeydownModal("Escape", (element) => {
    setIsOpen(false);
  });

  return (
    <div role="dialog" className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h1 className="title white">Carrinho de compras</h1>
          <button ref={buttonRef} onClick={() => setIsOpen(false)}>
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
