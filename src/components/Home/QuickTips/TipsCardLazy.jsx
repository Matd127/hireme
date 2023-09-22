import {
  TipsCard,
  TipsCardImage,
  TipsCardText,
  TipsCardTitle,
} from "./QuickTipsStyle";

const TipsCardLazy = ({ tip }) => {
  return (
    <TipsCard>
      <TipsCardImage src={tip.image} loading="lazy"/>
      <TipsCardTitle>{tip.title}</TipsCardTitle>
      <TipsCardText>{tip.description}</TipsCardText>
    </TipsCard>
  );
};

export default TipsCardLazy;
