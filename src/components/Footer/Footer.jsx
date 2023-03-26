import {
  FooterContainer,
  FooterContent,
  FooterInnerCotainer,
  FooterLogo,
  FooterItem,
  FooterBottomContent,
} from "./Footer.style";
import { Hr } from "../UI/Hr";
import { IoIosArrowDropup } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";

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
              <Hr width="15%"/>
              <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laborum consequatur aliquam tempore recusandae ab
                accusantium id adipisci assumenda nihil fugiat, dicta deserunt
                quos provident ipsam inventore numquam, necessitatibus
                quibusdam.
              </div>
            </FooterItem>

            {/* candidates */}
            <FooterItem>
              For candidates
              <Hr width="15%" />
              <div className="info">
                <div>
                  <AiFillCaretRight />
                  Find a job
                </div>
              </div>
            </FooterItem>

            {/* employers */}
            <FooterItem>
              For employers
              <Hr width="15%" />
              <div className="info">
              <div>
                  <AiFillCaretRight />
                  Post a job
                </div>
              </div>
            </FooterItem>

            {/* info */}
            <FooterItem>
              Information
              <Hr width="15%" />
              <div className="info">
                <div>
                  <AiFillCaretRight />
                  About Us
                </div>
                <div>
                  <AiFillCaretRight />
                  Contact Us
                </div>
                <div>
                  <AiFillCaretRight />
                  FAQs
                </div>
              </div>
            </FooterItem>
          </FooterContent>
          <FooterBottomContent>
            <div>Copyright ...</div>
            <div>
              <IoIosArrowDropup onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{ fontSize: "40px" }} />
            </div>
            <div>Github and other icons</div>
          </FooterBottomContent>
        </FooterInnerCotainer>
      </FooterContainer>
    </>
  );
};
export default Footer;