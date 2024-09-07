import ListProject from "../Elements/Project/ListProject";
import Siarin from "../../assets/images/image-siarin.png";
import Sipus from "../../assets/images/image-perpus.png";
import Ecommerce from "../../assets/images/image-e-commerce.png";

const ListContent = [
  {
    Image: Siarin,
    Title: "Sistem Informasi Agenda Rapat Internal Web.",
    Link: "https://github.com/Titon19/SIARIN",
  },
  {
    Image: Sipus,
    Title: "Sistem Informasi Perpustakaan Web Dengan Notifikasi Whatsapp.",
    Link: "https://github.com/Titon19/SIPUS17",
  },
  {
    Image: Ecommerce,
    Title: "Sistem E-Commerce Web.",
    Link: "https://github.com/Titon19/E-Commerce",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-evenly items-center h-auto bg-bodyColor text-slate-100 p-16"
    >
      <h1 className="text-center text-xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-slate-300 pb-12">
        My Projects
      </h1>
      <ListProject projects={ListContent} />
    </section>
  );
};
export default Projects;
