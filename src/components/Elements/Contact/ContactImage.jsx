import contactImage from "../../../assets/images/contact-image.svg";
const ContactImage = () => {
  return (
    <div className="outline-dashed outline-15 outline-textNav p-3 rounded-xl">
      <img
        className="w-48 h-48 md:w-52 md:h-52"
        src={contactImage}
        alt="contact-image"
      />
    </div>
  );
};

export default ContactImage;
