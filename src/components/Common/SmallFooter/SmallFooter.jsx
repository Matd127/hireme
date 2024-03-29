import { SmallFooterTitle, SmallFooterWrapper } from "./SmallFooterStyle";
import { InnerWrapper } from "../../UI/styles/WrapperStyle";
const SmallFooter = () => {
  return (
    <SmallFooterWrapper theme="dark">
      <InnerWrapper>
        <SmallFooterTitle>© HireMe 2023</SmallFooterTitle>
      </InnerWrapper>
    </SmallFooterWrapper>
  );
};

export default SmallFooter;
