import DescriptonHero from "../Elements/Hero/DescriptionHero";
import HeroImage from "../Elements/Hero/HeroImage";
const Hero = () => {
  const myName = "Titon Meisya Kresna";
  const myDescription = ` Saya adalah seorang Fresh Greduate dari Universitas Serang Raya. Jurusan
        Sistem Informasi. Saya berminat dan fokus dalam pengembangan web. Saya
        juga mau belajar dengan hal baru terkait dengan teknologi yang ada pada
        website. Saya juga memiliki skill dalam desain digital.`;
  const mySocialLinks = {
    linkedIn: "https://www.linkedin.com/in/titon-meisya-kresna-93391b300/",
    instagram: "https://www.instagram.com/titonkresna/",
    github: "https://github.com/Titon19",
  };
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-evenly items-center sm:p-0 md:p-5 gap-3 md:gap-10 sm:gap-0 bg-bodyColor text-slate-100 h-screen"
    >
      <DescriptonHero
        myName={myName}
        myDescription={myDescription}
        mySocialLinks={mySocialLinks}
      />
      <HeroImage />
    </section>
  );
};

export default Hero;
