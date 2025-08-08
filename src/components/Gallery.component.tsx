import { useEffect, useState } from "react";
import DogBreedSelect from "./DogBreedSelect.component";
import { ImageList } from "./ImageList.component";
import InputCount from "./InputCount.component";

const Gallery = () => {
  const [countImages, setCountImages] = useState(3);
  const [updateCount, setUpdateCount] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState<string>("all");

  const [images, setImages] = useState<{ id: number; src: string }[] | null>(
    null,
  );

  useEffect(() => {
    loadImages();
  }, [selectedBreed]);

  const loadImages = async () => {
    const res =
      selectedBreed === "all"
        ? await fetch(`https://dog.ceo/api/breeds/image/random/${countImages}`)
        : await fetch(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/${countImages}`,
          );

    const result = await res.json();

    setImages(
      result.message.map((item: string, idx: number) => ({
        id: idx + 1,
        src: item,
      })),
    );

    setUpdateCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {updateCount} раз(а)</p>
      <DogBreedSelect
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <InputCount
        countImages={countImages}
        setCountImages={setCountImages}
        loadImages={loadImages}
      />
      <ImageList images={images} />
    </div>
  );
};

export default Gallery;
