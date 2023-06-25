import { useState, useEffect } from "react";
import { Count } from "./JobsStatsStyle";

const CountAnimation = ({ targetCount }) => {
  const [count, setCount] = useState(0);
  const speed = targetCount < 150 ? 10 : targetCount < 400 ? 5 : 1;

  useEffect(() => {
    const countInterval = setInterval(() => {
      if (count < targetCount) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(countInterval);
      }
    }, speed); 

    return () => {
      clearInterval(countInterval);
    };
  }, [targetCount, count, speed]);

  return <Count>{count}</Count>;
};

export default CountAnimation