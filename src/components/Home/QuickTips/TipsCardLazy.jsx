import {
  TipsCard,
  TipsCardImage,
  TipsCardText,
  TipsCardTitle,
} from "./QuickTipsStyle";

const TipsCardLazy = ({ tip }) => {
  return (
    <TipsCard>
      <TipsCardImage background={tip.image} />
      <TipsCardTitle>{tip.title}</TipsCardTitle>
      <TipsCardText>{tip.description}</TipsCardText>
    </TipsCard>
  );
};

export default TipsCardLazy;
