import AboutImage from "../Elements/About/AboutImage";
import DescriptionAbout from "../Elements/About/DescriptionAbout";
const About = () => {
  const listDescriptionAbout = [
    `Saya adalah seorang Fresh Greduate dari Universitas Serang Raya. Jurusan Sistem Informasi.`,
    `Saya fokus dalam pengembangan website baik Front-End maupun Back-End (Bisa juga Fullstack-Dev) dan telah mengerjakan beberapa project yang saya buat.`,
    `Saya menguasai beberapa bahasa pemrograman yang ada pada website. seperti HTML, CSS, JavaScript Dasar, React.js Dasar, PHP, Framework Laravel Dasar dan tentunya MySQL. Saya juga menguasai aplikasi desain digital seperti CorelDraw dan Photoshop.`,
  ];
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
        <DescriptionAbout listDescriptions={listDescriptionAbout} />
        <AboutImage />
      </div>
    </section>
  );
};

export default About;
