import { Modal } from "../Modal";
import { CartCard } from "./CartCard";

export function CartModal({ cartList, setIsOpen, removeFromCart }) {
  return (
    <Modal setIsOpen={setIsOpen}>
      <ul>
        {cartList.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </Modal>
  );
}
