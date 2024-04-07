import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { ErrorMessage, FeaturedCardGrid } from "./FeaturedCategoriesStyle";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import Loader from '../../Loader/Loader'
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import { useSelector } from "react-redux";

const LazyFeaturedCard = lazy(() => import("./FeaturedCardLazy"));

const FeaturedCategories = () => {
  const { jobsList } = useSelector((state) => state.jobs);
  const { categoriesList, error } = useSelector((state) => state.categories);

  const categoryData = jobsList && jobsList?.reduce((acc, job) => {
    const jobCategory = job.jobCategory;
    const categoryIndex = acc.findIndex(
      (category) => category.name === jobCategory
    );

    if (categoryIndex !== -1) {
      acc[categoryIndex].count++;
    } else {
      const category = categoriesList?.find(
        (category) => category.name === jobCategory
      );
      acc.push({ ...category, count: 1 });
    }
    return acc.slice(0, 6);
  }, []);

  const [animate, setAnimate] = useState(false);
  const { ref: categoriesRef, inView: featuredCategoriesAreVisible } =
    useInView({
      threshold: 0.25,
      triggerOnce: true,
    });

  useEffect(() => {
    if (featuredCategoriesAreVisible) {
      setAnimate(true);
    }
  }, [featuredCategoriesAreVisible, animate]);

  return (
    <SectionWrapper>
      <SectionTitle ref={categoriesRef}>
        Browse Some Featured Categories
      </SectionTitle>
      <Suspense fallback={<Loader />}>
        {error && (
          <ErrorMessage>
            The categories were not loaded due to an error.
          </ErrorMessage>
        )}
        <FeaturedCardGrid animate={animate}>
          {categoryData &&
            categoryData.map((category, index) => (
              <LazyFeaturedCard
                category={category}
                index={index}
                key={index}
              ></LazyFeaturedCard>
            ))}
        </FeaturedCardGrid>
      </Suspense>
    </SectionWrapper>
  );
};

export default FeaturedCategories;
