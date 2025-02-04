import { useState, useEffect } from "react";
import { api } from "./services/api";
import { Header } from "./components/Header";
import { ProductSection } from "./components/ProductSection";
import { CartModal } from "./components/CartModal";

function App() {
  // Product List Section

  const localProducts = localStorage.getItem("@PRODUCTS");
  const [products, setProducts] = useState(
    localProducts ? JSON.parse(localProducts) : []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        const { data } = await api.get("/products");

        setProducts(data);

        localStorage.setItem("@PRODUCTS", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  // Product Cart Section

  const localCart = localStorage.getItem("@CARTLIST");
  const [cartList, setCartList] = useState(
    localCart ? JSON.parse(localCart) : []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));

    let cartItems = cartList.map((item) => item.qty);

    setCounter(cartItems.reduce((total, qty) => total + qty, 0));
  }, [cartList]);

  function addToCart(product) {
    let found = cartList.findIndex((cartItem) => cartItem.id == product.id);

    if (found != -1) {
      const updatedCartList = cartList.map((cartItem, index) =>
        index != found ? cartItem : { ...cartItem, qty: cartItem.qty + 1 }
      );

      setCartList(updatedCartList);
    } else {
      const newCartItem = { ...product, qty: 1 };
      setCartList([...cartList, newCartItem]);
    }
  }

  function removeFromCart(id) {
    let updatedCartList = cartList;
    const found = cartList.findIndex((cartItem) => cartItem.id == id);

    if (cartList[found].qty > 1) {
      updatedCartList[found].qty = updatedCartList[found].qty - 1;
    } else {
      updatedCartList.filter((cartItem) => cartItem.id != found);
    }

    setCartList(updatedCartList);
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} counter={counter} />
      {loading ? (
        <h1>Carregando produtos...</h1>
      ) : (
        <ProductSection products={products} addToCart={addToCart} />
      )}
      {isOpen ? (
        <CartModal setIsOpen={setIsOpen} removeFromCart={removeFromCart} />
      ) : null}
    </>
  );
}

export default App;
