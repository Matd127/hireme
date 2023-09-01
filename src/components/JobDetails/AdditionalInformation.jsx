import {
  AdditionalInformationWrapper,
  KeywordsWrapper,
  AdditionalTitle,
  Keyword,
  KeywordsList,
} from "./JobDetailsStyle";

const AdditionalInformation = ({ keywords }) => {
  return (
    <AdditionalInformationWrapper>
      <KeywordsWrapper>
        <AdditionalTitle>Keywords</AdditionalTitle>
        <KeywordsList>
          {keywords.map((keyword, index) => (
            <Keyword key={index}>{keyword}</Keyword>
          ))}
        </KeywordsList>
      </KeywordsWrapper>
    </AdditionalInformationWrapper>
  );
};

export default AdditionalInformation;
