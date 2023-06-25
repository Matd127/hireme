import { Wrapper } from "../../UI/WrapperStyle";
import {
  FooterDescription,
  FooterInnerWrapper,
  FooterItem,
  FooterLinks,
  FooterTitle,
  FooterListItem
} from "./BigFooterStyle";

const Footer = () => {
  return (
    <>
    <Wrapper theme="dark">
      <FooterInnerWrapper>

        <FooterItem>
          <FooterTitle>HireMe</FooterTitle>
          <FooterDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus incidunt, nisi corrupti recusandae est accusamus
            possimus unde perferendis culpa, fugiat tempore in consequuntur quo?
            Ducimus doloribus architecto natus dicta!
          </FooterDescription>
        </FooterItem>

        <FooterItem>
        <FooterTitle>Job Board</FooterTitle>
          <FooterLinks>
            <FooterListItem>Job List</FooterListItem>
            <FooterListItem>Browse Categories</FooterListItem>
            <FooterListItem>Post A New Job</FooterListItem>
          </FooterLinks>
        </FooterItem>

        <FooterItem>
        <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>About us</FooterListItem>
            <FooterListItem>Contact</FooterListItem>
          </FooterLinks>
        </FooterItem>

        <FooterItem>
        <FooterTitle>Information</FooterTitle>
          <FooterLinks>
            <FooterListItem>Phone +00 000 000 000</FooterListItem>
            <FooterListItem>Email: email@email.com</FooterListItem>
            <FooterListItem>Address: Random Street 93, Location, Country</FooterListItem>
          </FooterLinks>
        </FooterItem>

      </FooterInnerWrapper>
    </Wrapper>
    </>
  );
};

export default Footer;
