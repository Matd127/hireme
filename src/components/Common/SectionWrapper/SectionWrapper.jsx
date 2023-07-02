import { InnerWrapper, Wrapper } from "../../UI/WrapperStyle";

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
