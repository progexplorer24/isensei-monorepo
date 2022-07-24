import React, { ReactElement } from "react";
import { cx, css } from "@emotion/css";

type ContainerProps = {
  children: React.ReactNode;
  widthInPx: number;
  className?: string;
};

const Container = ({
  children,
  className = "",
  widthInPx,
}: ContainerProps): ReactElement => {
  const componentContainer = (widthInPx: number): string => css`
    width: ${widthInPx}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;

  return (
    <div
      className={cx(
        componentContainer(widthInPx),
        "mt-8 rounded-md border border-solid border-[#f4f5f8] bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
