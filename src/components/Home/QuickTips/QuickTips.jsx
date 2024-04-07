import { TipsCardGrid } from "./QuickTipsStyle";
import Tips from "./Tips";
import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";

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
    <SectionWrapper>
      <SectionTitle ref={tipsRef}>Quick tips before an internview</SectionTitle>
      <Suspense fallback={<Loader />}>
        <TipsCardGrid>
          {Tips.map(
            (tip) => animate && <LazyTipsCard key={tip.id} tip={tip} />
          )}
        </TipsCardGrid>
      </Suspense>
    </SectionWrapper>
  );
};

export default QuickTips;
