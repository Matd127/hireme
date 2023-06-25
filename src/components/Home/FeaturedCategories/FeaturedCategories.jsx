import { Wrapper, InnerWrapper } from "../../UI/WrapperStyle";
import { FeaturedCardGrid, FeaturedCategoriesTitle} from "./FeaturedCategoriesStyle";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import Loader from "../../UI/Loader/Loader";

const LazyFeaturedCard = lazy(() => import("./FeaturedCardLazy"));
//Replace it real data
const dummyCategory = {
  title: "Some Category",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const categoriesList = new Array(6).fill(dummyCategory);
///

const FeaturedCategories = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: categoriesRef, inView: featuredCategoriesAreVisible } =
    useInView({
      threshold: 0.25,
    });

  useEffect(() => {
    if (featuredCategoriesAreVisible) {
      setAnimate(true);
    }
  }, [featuredCategoriesAreVisible, animate]);

  return (
    <Wrapper>
      <InnerWrapper>
        <FeaturedCategoriesTitle ref={categoriesRef}>
          Browse Some Featured Categories
        </FeaturedCategoriesTitle>
        <Suspense fallback={<Loader />}>
          <FeaturedCardGrid animate={animate}>
            {categoriesList.map((category, index) => (
              <LazyFeaturedCard
                category={category}
                index={index}
                key={index}
              ></LazyFeaturedCard>
            ))}
          </FeaturedCardGrid>
        </Suspense>
      </InnerWrapper>
    </Wrapper>
  );
};

export default FeaturedCategories;