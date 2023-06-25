import { Wrapper, InnerWrapper } from "../../UI/WrapperStyle";
import { QuickTipsTitle, TipsCardWrapper } from "./QuickTipsStyle";
import Tips from "./Tips";
import { lazy, Suspense, useState, useEffect } from "react";
import Loader from '../../UI/Loader/Loader'
import { useInView } from "react-intersection-observer";

const LazyTipsCard = lazy(() => import("./TipsCardLazy"));

const QuickTips = () => {
  const [animate, setAnimate] = useState(false);
  const { ref: tipsRef, inView: tipsAreVisible } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (tipsAreVisible) {
      setAnimate(true);
    }
  }, [tipsAreVisible, animate]);

  return (
    <Wrapper>
      <InnerWrapper>
        <QuickTipsTitle ref={tipsRef}>
          Quick tips before an internview
        </QuickTipsTitle>
        <Suspense fallback={<Loader />}>
          <TipsCardWrapper>
            {Tips.map(
              (tip) => animate && <LazyTipsCard key={tip.id} tip={tip} />
            )}
          </TipsCardWrapper>
        </Suspense>
      </InnerWrapper>
    </Wrapper>
  );
};

export default QuickTips;
