import {
  FooterContainer,
  FooterContent,
  FooterInnerCotainer,
  FooterLogo,
  FooterItem,
  FooterBottomContent,
} from "./Footer.style";
import { Hr } from "../UI/Hr";
import {IoIosArrowDropup} from "react-icons/io";
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
              <Hr width="35%" />
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
              <Hr width="35%" />
              <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laborum consequatur aliquam tempore recusandae ab
                accusantium id adipisci assumenda nihil fugiat, dicta deserunt
                quos provident ipsam inventore numquam, necessitatibus
                quibusdam.
              </div>
            </FooterItem>
            <FooterItem>
              For employers
              <Hr width="35%" />
              <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laborum consequatur aliquam tempore recusandae ab
                accusantium id adipisci assumenda nihil fugiat, dicta deserunt
                quos provident ipsam inventore numquam, necessitatibus
                quibusdam.
              </div>
            </FooterItem>
            <FooterItem>
              Information
              <Hr width="35%" />
              <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laborum consequatur aliquam tempore recusandae ab
                accusantium id adipisci assumenda nihil fugiat, dicta deserunt
                quos provident ipsam inventore numquam, necessitatibus
                quibusdam.
              </div>
            </FooterItem>
          </FooterContent>
          <FooterBottomContent>
            <div>Copyright ...</div>
            <div><IoIosArrowDropup style={{fontSize: '40px'}}/></div>
            <div>Github and other icons</div>
          </FooterBottomContent>
        </FooterInnerCotainer>
      </FooterContainer>
    </>
  );
};
export default Footer;
