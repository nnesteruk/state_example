import { useEffect, useState } from "react";

const DogBreedSelect = ({
  selectedBreed,
  setSelectedBreed,
}: {
  selectedBreed: string;
  setSelectedBreed: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [breeds, setBreeds] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const allBreeds = [
          { id: 0, name: "all" },
          ...Object.keys(data.message).map((item: string, idx: number) => ({
            id: idx + 1,
            name: item,
          })),
        ];

        setBreeds(allBreeds);
      });
  }, []);

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
      <p>Порода: </p>
      <select
        style={{ padding: 5, height: 30, border: "1px solid", borderRadius: 5 }}
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {breeds.map((item) => {
          return (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DogBreedSelect;
