import { useState } from "react";

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <li>
              {item.title} (Кол-во: {item.count})
            </li>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => incCountProduct(item.id)}>+1</button>
              <button onClick={() => deleteProduct(item.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </ul>
      <button onClick={clearCart} style={{ width: "100%" }}>
        Очистить корзину
      </button>
    </div>
  );
};

export default ProductCart;
