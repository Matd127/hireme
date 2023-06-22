import ContactForm from "../components/ContactForm/ContactForm";
import Navigation from "../components/Navigation/Navigation";
import SuccessMessage from "../components/ContactForm/SuccessMessage";
import { useState } from "react";

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false)
  return <>
  <Navigation/>
  {!isSent ? <ContactForm setIsSent = {setIsSent}/> : <SuccessMessage/>}
  </>
};

export default ContactPage;
