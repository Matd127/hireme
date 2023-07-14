import { useState } from "react";
import {
  FormInput,
  PostingFormGroup,
  PostingFormLabel,
} from "../../JobPosting/PostingForm/PostingFormStyle";
import {
  AdvancedMenu,
  AdvancedAction,
  JobSearchButton,
  JobSearchGrid,
  SearchFormWrapper,
} from "./JobSearchStyle";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";

const JobSearchForm = () => {
  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false);

  return (
    <SectionWrapper>
      <SearchFormWrapper>
        <JobSearchGrid showAdvancedMenu = {showAdvancedMenu}>
          <PostingFormGroup>
            <PostingFormLabel>Job Title</PostingFormLabel>
            <FormInput
              type="text"
              placeholder="Enter job title, position or keyword"
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Location</PostingFormLabel>
            <FormInput type="text" placeholder="Enter job location" />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Categories</PostingFormLabel>
            <FormInput type="text" placeholder="Company name" />
          </PostingFormGroup>

          {showAdvancedMenu && (
            <>
              <PostingFormGroup>
                <PostingFormLabel>Company Name</PostingFormLabel>
                <FormInput type="text" placeholder="Company name" />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Company Name</PostingFormLabel>
                <FormInput type="text" placeholder="Company name" />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Company Name</PostingFormLabel>
                <FormInput type="text" placeholder="Company name" />
              </PostingFormGroup>
            </>
          )}
        </JobSearchGrid>

        <AdvancedMenu>
          {!showAdvancedMenu && (
            <AdvancedAction
              onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
            >
              Show Advanced Filters <BsChevronDown />
            </AdvancedAction>
          )}

          {showAdvancedMenu && (
            <AdvancedAction
              onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
            >
              Hide Advanced Filters <BsChevronUp />
            </AdvancedAction>
          )}

          <JobSearchButton>Search</JobSearchButton>
        </AdvancedMenu>
      </SearchFormWrapper>
    </SectionWrapper>
  );
};

export default JobSearchForm;
