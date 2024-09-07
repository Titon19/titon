import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const descriptionHero = (props) => {
  const { name, description, socialLinks } = props;
  return (
    <div className="title w-80 sm:w-3/4 md:w-1/2">
      <h1 className="title-text text-md sm:text-xl md:text-1xl lg:text-2xl font-bold">
        Halo! Guys!
      </h1>
      <h2 className="subtitle-text text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-textNav">
        <span className="text-slate-100">Saya</span> {name}
      </h2>
      <h3 className="subtitle-text text-sm sm:text-lg md:text-lg lg:text-xl text-slate-400 md:pb-5 pb-2 text-justify">
        {description}
      </h3>
      <div className="flex gap-3">
        <a href={socialLinks} target="_blank">
          <FaLinkedin className="size-4 md:size-8 sm:size-4 text-slate-100 hover:text-textNav" />
        </a>
        <a href={socialLinks} target="_blank">
          <FaInstagram className="size-4 md:size-8 sm:size-4 text-slate-100 hover:text-textNav" />
        </a>
        <a href={socialLinks} target="_blank">
          <FaGithub className="size-4 md:size-8 sm:size-4 text-slate-100 hover:text-textNav" />
        </a>
      </div>
    </div>
  );
};

export default descriptionHero;
