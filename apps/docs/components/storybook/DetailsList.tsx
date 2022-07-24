import React, { ReactElement, useState } from "react";
import { cx, css } from "@emotion/css";
import { DetailsListData } from "./DataView";

type DetailsListProps = {
  className?: string;
  headerStyles?: string;
  toggleStyles?: string;
  textStyles?: string;
  toggleIconOpen: JSX.Element;
  toggleIconClose: JSX.Element;
  gridIcon: JSX.Element;
  data: DetailsListData;
};

const DetailsList = ({
  className = "",
  headerStyles = "",
  toggleStyles = "",
  textStyles = "",
  toggleIconOpen,
  toggleIconClose,
  gridIcon,
  data,
}: DetailsListProps): ReactElement => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={cx(
        `solid mt-4 border-l-4 pl-3`,
        css`
          border-color: ${data.borderColor};
        `,
        className
      )}
    >
      <div className={cx("mb-4 flex items-center justify-between")}>
        <span className={cx(headerStyles)}>{data.sectionTitle}</span>
        {data.icon}
      </div>
      <div>
        <button
          className={cx("h-auto w-full justify-start border-none")}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? toggleIconOpen : toggleIconClose}
          <span className={cx("tracking-wide", toggleStyles)}>Users</span>
        </button>
        <div
          className={cx(
            "border-g my-4 ml-2 border-l pl-6",
            toggle ? "block" : "hidden"
          )}
        >
          <div className="mb-3 flex items-center">
            {gridIcon} <span className={textStyles}>All Records</span>
          </div>
          <div className="mb-3 flex items-center">
            {gridIcon} <span className={textStyles}>Users: Mexico</span>
          </div>
          <div className="mb-3 flex items-center">
            {gridIcon} <span className={textStyles}>Users: America</span>
          </div>
        </div>
      </div>

      <div>
        <button
          className={cx("h-auto w-full justify-start border-none")}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? toggleIconOpen : toggleIconClose}
          <span className={cx("tracking-wide", toggleStyles)}>Projects</span>
        </button>
      </div>
    </div>
  );
};
export default DetailsList;
