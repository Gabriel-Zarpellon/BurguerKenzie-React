import styles from "./style.module.scss";

export function ProductCard({ product, addToCart }) {
  return (
    <li className={styles.productCard}>
      <div className={styles.imgBox}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.textBox}>
        <h1 className="title">{product.name}</h1>
        <p className="paragraph">{product.category}</p>
        <p className="paragraph green">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
