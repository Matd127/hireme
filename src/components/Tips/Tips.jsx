import {
  TipCard,
  TipsContainer,
  TipsInnerContainer,
  TipsItems,
  TipsTitle,
} from "./Tips.style";
import { Hr } from "../UI/Hr";
import interview from "../../assets/interview.jpg";
import research from "../../assets/research.jpg";
import suit from "../../assets/suit.jpg";

const Tips = () => {
  return (
    <>
      <TipsContainer>
        <TipsInnerContainer>
          <TipsTitle>Tips before an interview</TipsTitle>
          <Hr />
          <TipsItems>
            <TipCard bg={interview}>
              <div className="content">
                <div className="name">
                  <h2>Practice your answers to common interview questions</h2>
                </div>
                <div className="info">
                  There are some questions that are commonly asked in
                  interviews, such as "What are your strengths and weaknesses?"
                  or "Why do you want to work here?" Practicing your answers
                  beforehand can help you feel more confident and prepared.
                </div>
              </div>
            </TipCard>

            <TipCard bg={research}>
              <div className="content">
                <div className="name">
                  <h2>Research the company and the interviewer beforehand</h2>
                </div>
                <div className="info">
                  It's important to know about the company and the person who
                  will be interviewing you. This can help you tailor your
                  answers and show that you have a genuine interest in the
                  company.
                </div>
              </div>
            </TipCard>

            <TipCard bg={suit}>
              <div className="content">
                <div className="name">
                  <h2>Dress appropriately</h2>
                </div>
                <div className="info">
                  Make sure you dress professionally for the interview, even if
                  it's a virtual one. This will show the interviewer that you
                  are taking the interview seriously.
                </div>
              </div>
            </TipCard>
          </TipsItems>
        </TipsInnerContainer>
      </TipsContainer>
    </>
  );
};

export default Tips;
