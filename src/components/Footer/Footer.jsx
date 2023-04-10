import {
  FooterContainer,
  FooterContent,
  FooterInnerCotainer,
  FooterLogo,
  FooterItem,
  FooterBottomContent,
  FooterLink,
} from "./Footer.style";
import { Hr } from "../UI/Hr";
import { IoIosArrowDropup } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterInnerCotainer>
          <FooterLogo>
            <h3>HireMe</h3>
          </FooterLogo>

          <FooterContent>
            <FooterItem>
              Who we are?
              <Hr width="15%" />
              <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laborum consequatur aliquam tempore recusandae ab
                accusantium id adipisci assumenda nihil fugiat, dicta deserunt
                quos provident ipsam inventore numquam, necessitatibus
                quibusdam.
              </div>
            </FooterItem>

            <FooterItem>
              For candidates
              <Hr width="15%" />
              <div className="info">
                <FooterLink to={"/jobs"}>
                  <AiFillCaretRight />
                  Find a job
                </FooterLink>
              </div>
            </FooterItem>

            <FooterItem>
              For employers
              <Hr width="15%" />
              <div className="info">
                <FooterLink to={"/contact"}>
                  <AiFillCaretRight />
                  Ask to post a job
                </FooterLink>
              </div>
            </FooterItem>

            <FooterItem>
              Information
              <Hr width="15%" />
              <div className="info">
                <FooterLink>
                  <AiFillCaretRight />
                  About Us
                </FooterLink>
                <FooterLink to={"/contact"}>
                  <AiFillCaretRight />
                  Contact Us
                </FooterLink>
              </div>
            </FooterItem>
          </FooterContent>

          <FooterBottomContent>
            <div>Copyright 2023</div>
            <div>
              <IoIosArrowDropup
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ fontSize: "40px" }}
              />
            </div>
            <div>
              <FooterLink to={`https://github.com/Matd127`}>
                <AiFillGithub style={{ fontSize: "30px" }}></AiFillGithub>
              </FooterLink>
            </div>
          </FooterBottomContent>
        </FooterInnerCotainer>
      </FooterContainer>
    </>
  );
};
export default Footer;
