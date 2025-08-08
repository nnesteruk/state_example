import { Suspense } from "react";

export const ImageList = ({
  images,
}: {
  images: { id: number; src: string }[] | null;
}) => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 15,
        }}
      >
        {images?.map((item) => (
          <img
            src={item.src}
            alt="dog"
            key={item.id}
            style={{ width: "100%", borderRadius: 10 }}
          />
        ))}
      </div>
    </Suspense>
  );
};
