import { Wrapper } from "../../utils/styles/WrapperStyle";
import {
  FooterDescription,
  FooterInnerWrapper,
  FooterItem,
  FooterLinks,
  FooterTitle,
  FooterListItem,
  FooterLink,
} from "./BigFooterStyle";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FOOTER_BOARD, FOOTER_INFO, FOOTER_QLINKS } from "./footerData";

export default function Footer() {
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
            {FOOTER_BOARD.map((item) => (
              <FooterListItem key={item.id}>
                <FooterLink to={item.link}>{item.name}</FooterLink>
              </FooterListItem>
            ))}
          </FooterLinks>
        </FooterItem>

        <FooterItem>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            {FOOTER_QLINKS.map((item) => (
              <FooterListItem key={item.id}>
                <FooterLink to={item.link}>{item.name}</FooterLink>
              </FooterListItem>
            ))}
          </FooterLinks>
        </FooterItem>

        <FooterItem>
          <FooterTitle>Information</FooterTitle>
          <FooterLinks>
            {FOOTER_INFO.map((item) => (
              <FooterListItem key={item.id}>{item.name}</FooterListItem>
            ))}
          </FooterLinks>
        </FooterItem>
      </FooterInnerWrapper>
    </Wrapper>
  );
}
