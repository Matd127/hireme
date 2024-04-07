import { Wrapper, InnerWrapper } from "../../../utils/styles/WrapperStyle";

const SectionWrapper = (props) => {
  return (
    <Wrapper theme={props.theme}>
      <InnerWrapper>
        {props.children}
      </InnerWrapper>
    </Wrapper>
  );
};

export default SectionWrapper;
