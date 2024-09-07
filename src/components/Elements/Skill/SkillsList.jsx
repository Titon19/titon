const skillsList = (props) => {
  const { skills } = props;
  return (
    <div className="bg-childBody rounded-2xl flex flex-row justify-center text-center items-center p-5 gap-5 flex-wrap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 flex flex-col items-center outline outline-2 outline-textNav hover:bg-hoverContact p-5 rounded-lg justify-center"
        >
          {skill.Image}
          <h3 className="text-xs sm:text-md md:text-lg font-bold">
            {skill.Title}
          </h3>
          <p className="text-xs">{skill.Level}</p>
        </div>
      ))}
    </div>
  );
};

export default skillsList;
