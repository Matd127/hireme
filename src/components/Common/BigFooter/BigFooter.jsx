import { Wrapper } from "../../UI/styles/WrapperStyle";
import {
  FooterDescription,
  FooterInnerWrapper,
  FooterItem,
  FooterLinks,
  FooterTitle,
  FooterListItem,
  FooterLink,
} from "./BigFooterStyle";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
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

          <FooterLink to="https://github.com/matd127">
            <AiFillGithub size={35} to={`google.com`} />
          </FooterLink>
          <FooterLink to="https://www.linkedin.com/in/mateusz-dziekan-8ab004208/">
            <AiFillLinkedin size={35} to={`google.com`} />
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterTitle>Job Board</FooterTitle>
          <FooterLinks>
            <FooterListItem>
              <FooterLink to="/jobs">Job List</FooterLink>
            </FooterListItem>
            <FooterListItem>Browse Categories</FooterListItem>
            <FooterListItem>
              <FooterLink to="/post">Post A New Job</FooterLink>
            </FooterListItem>
          </FooterLinks>
        </FooterItem>

        <FooterItem>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterListItem>
              <FooterLink to="/">Home</FooterLink>
            </FooterListItem>
            <FooterListItem>About us</FooterListItem>
            <FooterListItem >
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterListItem>
          </FooterLinks>
        </FooterItem>

        <FooterItem>
          <FooterTitle>Information</FooterTitle>
          <FooterLinks>
            <FooterListItem>Phone +00 000 000 000</FooterListItem>
            <FooterListItem>Email: email@email.com</FooterListItem>
            <FooterListItem>
              Address: Random Street 93, Location, Country
            </FooterListItem>
          </FooterLinks>
        </FooterItem>
      </FooterInnerWrapper>
    </Wrapper>
  );
};

export default Footer;
