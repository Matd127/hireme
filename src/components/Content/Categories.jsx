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

const FeaturedCategories = () => {
  const [isFirst, setIsFirst] = useState(true);
  return (
    <>
      <CategoriesContainer>
        <CategoriesTitle>Browse some featured categories</CategoriesTitle>
        <CategoriesIcon>
          <TfiHandPointDown />
        </CategoriesIcon>
        <CategoriesItemsCotainer>
          <CategoriesItems>
            <CategoriesItem isFirst={isFirst}>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>First Category</div>
              <div>(13 jobs)</div>
            </CategoriesItem>

            <CategoriesItem>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>Second Category</div>
              <div>(123 jobs)</div>
            </CategoriesItem>

            <CategoriesItem>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>Third Category</div>
              <div>(29 jobs)</div>
            </CategoriesItem>

            <CategoriesItem>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>Fourth Category</div>
              <div>(230 jobs)</div>
            </CategoriesItem>

            <CategoriesItem>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>
              <div>Fifth Category</div>
              <div>(13 jobs)</div>
            </CategoriesItem>

            <CategoriesItem>
              <div>
                <TbBriefcase style={{ fontSize: "40px" }} />
              </div>

              <div>Category</div>
              <div>(24 jobs)</div>
            </CategoriesItem>
          </CategoriesItems>
        </CategoriesItemsCotainer>
      </CategoriesContainer>
    </>
  );
};

export default FeaturedCategories;
