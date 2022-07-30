import React, { ReactElement } from "react";
import { cx } from "@emotion/css";

type ContainerHeaderProps = {
  children: string;
  className?: string;
  textStyles?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const emptyIcon = (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="6" fill="#FDFDFD" />
  </svg>
);

const ContainerHeader = ({
  children,
  className = "",
  textStyles = "",
  iconLeft = emptyIcon,
  iconRight = emptyIcon,
}: ContainerHeaderProps): ReactElement => {
  return (
    <div
      className={cx(
        "solid flex items-center justify-between border-b border-gray-200 pb-4",
        className
      )}
    >
      {iconLeft}
      <span className={cx(textStyles)}>{children}</span>
      {iconRight}
    </div>
  );
};
export default ContainerHeader;
