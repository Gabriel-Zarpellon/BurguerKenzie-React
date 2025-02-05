import { FaTrash } from "react-icons/fa6";

export function CartCard({ product, removeFromCart }) {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <div>
          <h1 className="title">{product.name}</h1>
          <button onClick={() => removeFromCart(product.id)}>
            <FaTrash size={21} />
          </button>
        </div>
        <p className="paragraph">x{product.qty}</p>
        <p className="paragraph green">
          {(product.price * product.qty).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </li>
  );
}
