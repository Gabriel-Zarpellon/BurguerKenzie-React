import { IoClose } from "react-icons/io5";

export function Modal({ children, total, setIsOpen }) {
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
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
