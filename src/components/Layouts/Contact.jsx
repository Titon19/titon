import ContactImage from "../Elements/Contact/ContactImage";
import ContactList from "../Elements/Contact/ContactList";
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
const Contact = () => {
  return (
    <section id="contact" className="min-h-px bg-childBody text-slate-100 p-16">
      <h1 className="text-left text-slate-300 font-bold text-xl sm:text-3xl md:text-4xl xl:text-4xl ">
        Contact Me!
      </h1>
      <div className="flex justify-between p-2 pt-8 items-center flex-col-reverse md:flex-row gap-5">
        <ContactList sosmeds={sosMed} />
        <ContactImage />
      </div>
    </section>
  );
};
export default Contact;
