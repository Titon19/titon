import ContactImage from "../Elements/Contact/ContactImage";
import ContactList from "../Elements/Contact/ContactList";
const Contact = () => {
  return (
    <section id="contact" className="min-h-px bg-childBody text-slate-100 p-16">
      <h1 className="text-left text-slate-300 font-bold text-xl sm:text-3xl md:text-4xl xl:text-4xl ">
        Contact Me!
      </h1>
      <div className="flex justify-between p-2 pt-8 items-center flex-col-reverse md:flex-row gap-5">
        <ContactList />
        <ContactImage />
      </div>
    </section>
  );
};
export default Contact;
