export function ProductCard({ product, addToCart }) {
  return (
    <li>
      <img src={product.img} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>
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
