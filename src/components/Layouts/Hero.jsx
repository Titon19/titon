import DescriptonHero from "../Elements/Hero/DescriptionHero";
import HeroImage from "../Elements/Hero/HeroImage";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-evenly items-center sm:p-0 md:p-5 gap-3 md:gap-10 sm:gap-0 bg-bodyColor text-slate-100 h-screen"
    >
      <DescriptonHero />
      <HeroImage />
    </section>
  );
};

export default Hero;
