import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export function ProductSection({ products, addToCart }) {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <ul className={styles.listBox}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
