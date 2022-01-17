import { useMemo } from "react";

const Emoji = ({ className, label, symbol }) => {
  const memoizedValue = useMemo(
    () => (
      <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint(symbol)}
      </span>
    ),
    [className, label, symbol]
  );
  return memoizedValue;
};

export default Emoji;
