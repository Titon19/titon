import AboutImage from "../Elements/About/AboutImage";
import DescriptionAbout from "../Elements/About/DescriptionAbout";
const About = () => {
  return (
    <section
      id="about"
      className="flex justify-evently gap-10 md:gap-20 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-16 h-screen flex-col bg-bodyColor text-slate-100"
    >
      <div className="title text-center">
        <h6 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-500 leading-tight">
          About Me
        </h6>
        <h1 className="text-xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-slate-300 leading-snug pt-5">
          Segalanya tentang saya.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-10 md:gap-20 flex-col-reverse lg:flex-row">
        <DescriptionAbout />
        <AboutImage />
      </div>
    </section>
  );
};

export default About;
