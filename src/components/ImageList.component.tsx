export const ImageList = ({
  images,
}: {
  images: { id: number; src: string }[] | null;
}) => {
  return (
    <>
      {images?.map((item) => (
        <img src={item.src} alt="dog" key={item.id} />
      ))}
    </>
  );
};
