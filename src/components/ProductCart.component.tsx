import { useState } from "react";
import CartItem from "./CartItem.component";

const ProductCart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const incCountProduct = (id: number) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const deleteProduct = (id: number) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div
      style={{
        border: "1px solid",
        padding: 20,
        borderRadius: 10,
        textAlign: "left",
      }}
    >
      <h3>Корзина товаров</h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {cart.map((item) => (
          <CartItem
            item={item}
            incCountProduct={incCountProduct}
            deleteProduct={deleteProduct}
            key={item.id}
          />
        ))}
      </ul>
      <button onClick={clearCart} style={{ width: "100%" }}>
        Очистить корзину
      </button>
    </div>
  );
};

export default ProductCart;
