import { IoClose } from "react-icons/io5";

export function Modal({ children, totalPrice, setIsOpen, clearCart }) {
  return (
    <div role="dialog">
      <div>
        <h1>Carrinho de compras</h1>
        <button onClick={() => setIsOpen(false)}>
          <IoClose size={21} />
        </button>
      </div>
      <div>{children}</div>
      <div>
        <div>
          <p>Total</p>
          <p>
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
