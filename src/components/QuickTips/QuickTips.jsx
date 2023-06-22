import { InnerWrapper, Wrapper } from "../UI/WrapperStyle";
import {
  QuickTipsTitle,
  TipsCard,
  TipsCardImage,
  TipsCardText,
  TipsCardTitle,
  TipsCardWrapper,
} from "./QuickTipsStyle";
import Tips from "./Tips";

const QuickTips = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <QuickTipsTitle>Quick tips before an internview</QuickTipsTitle>
        <TipsCardWrapper>
          {Tips.map((tip) => (
            <TipsCard key={tip.id}>
              <TipsCardImage background={tip.image} />
              <TipsCardTitle>{tip.title} </TipsCardTitle>
              <TipsCardText>{tip.description}</TipsCardText>
            </TipsCard>
          ))}
        </TipsCardWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default QuickTips;
