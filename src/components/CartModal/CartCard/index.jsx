import { FaTrash } from "react-icons/fa6";
import styles from "./style.module.scss";

export function CartCard({ product, removeFromCart }) {
  return (
    <li className={styles.productCard}>
      <div className={styles.imgBox}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.cardBottom}>
        <div>
          <h1 className="title">{product.name}</h1>
          <p className="paragraph">x{product.qty}</p>
          <p className="paragraph green">
            {(product.price * product.qty).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <button onClick={() => removeFromCart(product.id)}>
          <FaTrash size={21} />
        </button>
      </div>
    </li>
  );
}
