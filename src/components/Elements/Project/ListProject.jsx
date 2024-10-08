import { FaGithub } from "react-icons/fa";

const listProject = (props) => {
  const { projects } = props;
  return (
    <div className="flex flex-col gap-5">
      {projects.map((item, index) => (
        <div
          key={index}
          className="bg-childBody flex flex-col xl:flex-row h-full justify-between p-5 xl:px-5 items-center w-full xl:max-w-screen-2xl gap-8 xl:h-32 rounded-lg"
        >
          <div className="flex gap-8 justify-between items-center flex-col xl:flex-row">
            <img
              className="w-32 h-16 xl:w-48 xl:h-24 rounded-lg"
              src={item.Image}
              alt="ImageProject"
            />
            <h1 className="text-sm xl:text-lg font-bold text-center xl:text-left">
              {item.Title}
            </h1>
          </div>
          <a
            href={item.Link}
            className="flex gap-2 justify-between items-center bg-textNav hover:bg-hoverPurple px-3 py-2 rounded font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 xl:w-8 xl:h-8" />
            <p className="text-sm md:text-md lg:text-lg xl:text-lg">
              View Code
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};
export default listProject;
