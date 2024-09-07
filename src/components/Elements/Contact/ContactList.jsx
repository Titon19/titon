const contactList = (props) => {
  const { sosmeds } = props;
  return (
    <div className="flex gap-5 flex-col">
      {sosmeds.map((item, index) => (
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

export default contactList;
