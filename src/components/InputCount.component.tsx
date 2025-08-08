const InputCount = ({
  countImages,
  setCountImages,
  loadImages,
}: {
  countImages: number;
  setCountImages: React.Dispatch<React.SetStateAction<number>>;
  loadImages: () => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountImages(e.target.valueAsNumber);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        gap: 10,
      }}
    >
      <p>Показать</p>
      <input
        type="number"
        value={countImages}
        max={50}
        min={1}
        onChange={handleChange}
        style={{
          width: 50,
          height: 30,
          padding: 5,
          border: "1px solid",
          borderRadius: 5,
          fontSize: 16,
        }}
      />
      <button onClick={loadImages}>Обновить</button>
    </div>
  );
};

export default InputCount;
