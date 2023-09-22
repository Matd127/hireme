import HeroSection from "../components/Common/HeroSection/HeroSection";
import BigFooter from "../components/Common/BigFooter/BigFooter";
import SmallFooter from "../components/Common/SmallFooter/SmallFooter";
import bg from "../assets/contact.jpg";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import { useEffect } from "react";

const ContactPage = () => {
  const title = "Contact us";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
