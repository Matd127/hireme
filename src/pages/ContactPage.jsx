import HeroSection from "../components/Common/HeroSection/HeroSection";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import bg from "../assets/contact.jpg";
import ContactForm from "../components/Contact/ContactForm/ContactForm";

const ContactPage = () => {
  const title = "Contact us";
  return (
    <>
      <HeroSection bg={bg} title={title} />
      <ContactForm />
      <BigFooter />
      <SmallFooter />
    </>
  );
};

export default ContactPage;
