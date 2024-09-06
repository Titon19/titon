import ListProject from "../Elements/Project/ListProject";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-evenly items-center h-auto bg-bodyColor text-slate-100 p-16"
    >
      <h1 className="text-center text-xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-slate-300 pb-12">
        My Projects
      </h1>
      <ListProject />
    </section>
  );
};
export default Projects;
