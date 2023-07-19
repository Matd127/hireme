import {
  FeaturedCard,
  FeaturedCardText,
  FeaturedCardTitle,
} from "./FeaturedCategoriesStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";

const FeaturedCardLazy = ({ category, index }) => {
  return (
    <FeaturedCard key={index} theme={index % 2 !== 0 ? "dark" : "light"}>
      <FeaturedCardTitle>{category.name}</FeaturedCardTitle>
      <BsFillBriefcaseFill size={50} />
      <FeaturedCardText>{category.description}</FeaturedCardText>
    </FeaturedCard>
  );
};

export default FeaturedCardLazy;
