import { useNavigate } from "react-router-dom";
import {
  FeaturedCard,
  FeaturedCardText,
  FeaturedCardTitle,
} from "./FeaturedCategoriesStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";

const FeaturedCardLazy = ({ category, index }) => {

  const navigate = useNavigate();

  const submitCategory = () => {
    navigate('/jobs', {state: { categoryName: category.name }})
  }
  return (
    <FeaturedCard key={index} theme={index % 2 !== 0 ? "dark" : "light"} onClick={submitCategory}>
      <FeaturedCardTitle>{category.name}</FeaturedCardTitle>
      <BsFillBriefcaseFill size={50} />
      <FeaturedCardText>{category.description}</FeaturedCardText>
    </FeaturedCard>
  );
};

export default FeaturedCardLazy;
