import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const sosMed = [
  {
    icon: <FaLinkedin className="size-5 sm:size:6 md:size-7" />,
    title: "titon-meisya-kresna",
    url: "https://www.linkedin.com/in/titon-meisya-kresna-93391b300/",
  },
  {
    icon: <FaGithub className="size-5 sm:size:6 md:size-7" />,
    title: "Titon19",
    url: "https://github.com/Titon19",
  },
  {
    icon: <FaInstagram className="size-5 sm:size:6 md:size-7" />,
    title: "@titonkresna",
    url: "https://www.instagram.com/titonkresna/",
  },
  {
    icon: <SiGmail className="size-5 sm:size:6 md:size-7" />,
    title: "titonkresna19@gmail.com",
  },
];
const ContactList = () => {
  return (
    <div className="flex gap-5 flex-col">
      {sosMed.map((item, index) => (
        <a
          href={item.url}
          key={index}
          className="flex gap-3 text-slate-300 hover:text-textNav items-center text-sm sm:text-md md:text-lg"
          target="_blank"
        >
          {item.icon}
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default ContactList;
