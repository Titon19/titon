const ImageHero = () => {
  return (
    <div className="image w-52 h-52 sm:w-80 sm:h-80 md:w-92 md:h-92 lg:w-96 lg:h-96">
      <img
        className="rounded-full grayscale hover:grayscale-0"
        src="..\assets\images\heroImage.png"
        alt="heroImage"
      />
    </div>
  );
};

export default ImageHero;
