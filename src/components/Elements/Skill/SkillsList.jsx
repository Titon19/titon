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
const SkillsList = () => {
  return (
    <div className="bg-childBody rounded-2xl flex flex-row justify-center text-center items-center p-5 gap-5 flex-wrap">
      {Skills.map((item, index) => (
        <div
          key={index}
          className="w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 flex flex-col items-center outline outline-2 outline-textNav hover:bg-hoverContact p-5 rounded-lg justify-center"
        >
          {item.Image}
          <h3 className="text-xs sm:text-md md:text-lg font-bold">
            {item.Title}
          </h3>
          <p className="text-xs">{item.Level}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
