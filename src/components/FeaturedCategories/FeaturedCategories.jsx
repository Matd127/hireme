import { InnerWrapper, Wrapper } from "../UI/WrapperStyle";
import {
  FeaturedCard,
  FeaturedCardText,
  FeaturedCardTitle,
  FeaturedCardGrid,
  FeaturedCategoriesTitle,
} from "./FeaturedCategoriesStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";

const dummyCategory = {
  title: "Some Category",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const categoriesList = new Array(6).fill(dummyCategory);

const FeaturedCategories = () => {
  return (
    <Wrapper>
      <InnerWrapper>
      <FeaturedCategoriesTitle>Browse Some Featured Categories</FeaturedCategoriesTitle>
      <FeaturedCardGrid>
        {categoriesList.map((category, index) => (
          <FeaturedCard key={index} theme={index % 2 !== 0 ? "dark" : "light"}>
            <FeaturedCardTitle>{category.title}</FeaturedCardTitle>
            <BsFillBriefcaseFill size={50} />
            <FeaturedCardText>{category.description}</FeaturedCardText>
          </FeaturedCard>
        ))}
      </FeaturedCardGrid>
      </InnerWrapper>
    </Wrapper>
  );
};

export default FeaturedCategories;
