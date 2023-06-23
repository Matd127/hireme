import { InnerWrapper, Wrapper } from "../UI/WrapperStyle";
import {
  FeaturedCard,
  FeaturedCardText,
  FeaturedCardTitle,
  FeaturedCardGrid,
  FeaturedCategoriesTitle,
} from "./FeaturedCategoriesStyle";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const dummyCategory = {
  title: "Some Category",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const categoriesList = new Array(6).fill(dummyCategory);

const FeaturedCategories = () => {
  const [animate, setAnimate] = useState(false)

  const {ref: categoriesRef, inView: featuredCategoriesAreVisible} = useInView({
    threshold: 0.25
  })

  useEffect(() => {
    if(featuredCategoriesAreVisible)  {
      setAnimate(true);
    }
  }, [featuredCategoriesAreVisible, animate])

  return (
    <Wrapper>
      <InnerWrapper>
      <FeaturedCategoriesTitle ref={categoriesRef}>Browse Some Featured Categories</FeaturedCategoriesTitle>
      <FeaturedCardGrid animate={animate}> 
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
