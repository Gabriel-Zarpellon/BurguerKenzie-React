import { IoClose } from "react-icons/io5";

export function Modal({ children, totalPrice, setIsOpen, clearCart }) {
  return (
    <div role="dialog">
      <div>
        <h1 className="title white">Carrinho de compras</h1>
        <button onClick={() => setIsOpen(false)}>
          <IoClose size={21} />
        </button>
      </div>
      <div>{children}</div>
      <div>
        <div>
          <p className="paragraph">Total</p>
          <p className="paragraph total">
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <button onClick={() => clearCart()}>Remover todos</button>
      </div>
    </div>
  );
}
