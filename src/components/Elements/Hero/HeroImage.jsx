import heroImage from "../../../assets/images/heroImage.png";
const imageHero = () => {
  return (
    <div className="image w-52 h-52 sm:w-80 sm:h-80 md:w-92 md:h-92 lg:w-96 lg:h-96">
      <img
        className="rounded-full grayscale hover:grayscale-0"
        src={heroImage}
        alt="heroImage"
      />
    </div>
  );
};

export default imageHero;
