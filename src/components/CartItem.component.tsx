import { memo } from "react";

const CartItem = ({
  item,
  incCountProduct,
  deleteProduct,
}: {
  item: { id: number; title: string; count: number };
  incCountProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
}) => {
  return (
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
  );
};

export default memo(CartItem, (prevProps, nextProps) => {
  return prevProps.item.count === nextProps.item.count;
});
