const descriptionAbout = (props) => {
  const { listDescriptions } = props;
  return (
    <p className="w-full text-lg text-justify flex flex-col gap-3">
      {listDescriptions.map((listDescription, index) => (
        <span
          key={index}
          className="outline outline-2 outline-textNav p-5 rounded text-xs sm:text-md md:text-lg lg:text-xl"
        >
          {listDescription}
        </span>
      ))}
    </p>
  );
};

export default descriptionAbout;
