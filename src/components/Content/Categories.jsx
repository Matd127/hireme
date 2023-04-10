import { useState } from "react";
import { TbBriefcase } from "react-icons/tb";
import { TfiHandPointDown } from "react-icons/tfi";
import {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesItemsCotainer,
  CategoriesItems,
  CategoriesItem,
  CategoriesIcon,
} from "./Categories.style";
import { useSelector } from "react-redux";

const FeaturedCategories = () => {
  const [isFirst] = useState(true);
  const featuredCategories = useSelector((state) => state.jobs.featuredCategories);
  return (
    <CategoriesContainer>
      <CategoriesTitle>Browse some featured categories</CategoriesTitle>
      <CategoriesIcon>
        <TfiHandPointDown />
      </CategoriesIcon>
      <CategoriesItemsCotainer>
        <CategoriesItems>
          {featuredCategories.slice(0, 6).map((category) => (
            <CategoriesItem key={category.category} isFirst={isFirst}>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>{category.category}</div>
              <div>
                ({category.amount} {category.amount === 1 ? "job" : "jobs"})
              </div>
            </CategoriesItem>
          ))}
        </CategoriesItems>
      </CategoriesItemsCotainer>
    </CategoriesContainer>
  );
};

export default FeaturedCategories;
