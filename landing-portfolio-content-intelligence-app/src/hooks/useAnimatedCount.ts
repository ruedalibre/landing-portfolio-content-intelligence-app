import { useEffect, useState } from "react";

export const useAnimatedCount = (target: number, duration = 600) => {
  const [count, setCount] = useState(target);

  useEffect(() => {
    const start = count;
    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const value = Math.floor(start + (target - start) * percentage);

      setCount(value);

      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target]);

  return count;
};
