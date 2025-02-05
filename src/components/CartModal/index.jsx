import { Modal } from "../Modal";
import { CartCard } from "./CartCard";

export function CartModal({
  cartList,
  setIsOpen,
  removeFromCart,
  totalPrice,
  clearCart,
}) {
  return (
    <Modal setIsOpen={setIsOpen} totalPrice={totalPrice} clearCart={clearCart}>
      <ul>
        {cartList.length > 0 ? (
          cartList.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <h1>Seu carrinho está vazio</h1>
        )}
      </ul>
    </Modal>
  );
}
