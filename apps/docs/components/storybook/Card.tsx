import { css, cx } from "@emotion/css";
import Image from "next/image";
import { colorPalette } from "./colorPalette";
import { typography } from "./typography";

type CardProps = {
  initials?: string;
  date?: string;
  creator?: string;
  cardStyles?: string;
  initialsStyles?: string;
  icon?: JSX.Element;
  avatarLink?: string;
};

const Card = ({
  initials = "",
  date = "",
  creator = "",
  cardStyles = "",
  initialsStyles = "",
  icon,
  avatarLink,
}: CardProps): React.ReactElement => (
  <div
    className={cx(
      "flex items-center justify-between",
      `solid border border-[${colorPalette.superLightGrey}] mb-4 rounded-md`,
      cardStyles
    )}
  >
    <div className={cx(` flex items-center`)}>
      {avatarLink ? (
        <div className="mr-3">
          <Image
            className="rounded-full"
            src={avatarLink}
            alt="Avatar Image"
            width="40"
            height="40"
          />
        </div>
      ) : (
        <div
          className={cx(
            `mr-3 flex h-10 w-10 items-center justify-center rounded-full tracking-widest`,
            css`
              color: white;
              font-weight: 400;
              font-size: 12px;
              line-height: 15px;
            `,
            initialsStyles
          )}
        >
          {initials}
        </div>
      )}
      <div>
        <div className={typography.textS}>{date}</div>
        <div className={typography.textXs}>{creator}</div>
      </div>
    </div>
    {icon ? icon : null}
  </div>
);

export default Card;
