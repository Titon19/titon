import SkillsList from "../Elements/Skill/SkillsList";
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
      <SkillsList />
    </section>
  );
};

export default Skill;
