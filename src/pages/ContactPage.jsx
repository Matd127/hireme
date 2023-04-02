import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SuccessMessage from "../components/ContactForm/SuccessMessage";
import { useState } from "react";

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false)
  return <>
  <Navbar/>
  {!isSent ? <ContactForm setIsSent = {setIsSent}/> : <SuccessMessage/>}
  <Footer/>
  </>
};

export default ContactPage;
