import { SmallFooterTitle, SmallFooterWrapper, SmallFotterInnerWrapper } from "./SmallFooterStyle";
const SmallFooter = () => {
  return (
    <SmallFooterWrapper theme="dark">
      <SmallFotterInnerWrapper>
        <SmallFooterTitle>© HireMe 2023</SmallFooterTitle>
      </SmallFotterInnerWrapper>
    </SmallFooterWrapper>
  );
};

export default SmallFooter;
