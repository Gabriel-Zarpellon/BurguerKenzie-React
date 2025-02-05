import { ProductCard } from "./ProductCard";

export function ProductSection({ products, addToCart }) {
  return (
    <section>
      <div className="container">
        <ul>
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
