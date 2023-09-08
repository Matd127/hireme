import { ContactCardIcon, ContactCardText, ContactCardTtile, ContactCardWrapper } from "./ContactCardStyle";

const ContactCard = ({icon, title, text}) => {
  return <ContactCardWrapper>
      <ContactCardIcon>
        {icon }
      </ContactCardIcon>
      <ContactCardTtile>{title}</ContactCardTtile>
      <ContactCardText>{text}</ContactCardText>
  </ContactCardWrapper>;
};

export default ContactCard;
