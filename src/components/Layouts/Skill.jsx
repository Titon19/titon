import SkillsList from "../Elements/Skill/SkillsList";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiMysql, SiAdobephotoshop, SiCoreldraw } from "react-icons/si";
const Skills = [
  {
    Title: "HTML",
    Image: <FaHtml5 className="size-6 sm:size-7 md:size-12" />,
    Level: "Middle",
  },
  {
    Title: "CSS",
    Image: <FaCss3 className="size-6 sm:size-7 md:size-12" />,
    Level: "Middle",
  },
  {
    Title: "JavaScript",
    Image: <FaJs className="size-6 sm:size-7 md:size-12" />,
    Level: "Basic",
  },
  {
    Title: "React.js",
    Image: <FaReact className="size-6 sm:size-7 md:size-12" />,
    Level: "Basic",
  },
  {
    Title: "PHP",
    Image: <FaPhp className="size-6 sm:size-7 md:size-12" />,
    Level: "Middle",
  },
  {
    Title: "Laravel",
    Image: <FaLaravel className="size-6 sm:size-7 md:size-12" />,
    Level: "Basic",
  },
  {
    Title: "MySQL",
    Image: <SiMysql className="size-6 sm:size-7 md:size-12" />,
    Level: "Middle",
  },
  {
    Title: "CorelDraw",
    Image: <SiCoreldraw className="size-6 sm:size-7 md:size-12" />,
    Level: "Middle",
  },
  {
    Title: "Photoshop",
    Image: <SiAdobephotoshop className="size-6 sm:size-7 md:size-12" />,
    Level: "Basic",
  },
];
const Skill = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-2 sm:gap-10 md:gap-20 sm:h-screen md:h-auto bg-bodyColor text-slate-100 p-16"
    >
      <div className="text-center">
        <h1 className="text-center font-bold text-xl  sm:text-2xl md:text-3xl text-slate-400">
          My Skills
        </h1>
        <h3 className="text-xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-slate-300 pt-12">
          Tools dan Skills yang saya miliki
        </h3>
      </div>
      <SkillsList skills={Skills} />
    </section>
  );
};

export default Skill;
