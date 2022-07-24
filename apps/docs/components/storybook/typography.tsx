import { css } from "@emotion/css";

const fontColor = css`
  color: #595b5c;
`;

export const typography = {
  textM: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-align: left;
    ${fontColor}
  `,
  textS: css`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    ${fontColor}
  `,
  textXs: css`
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 175%;
    ${fontColor}
  `,
};
