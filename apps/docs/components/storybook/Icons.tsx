import { cx } from "@emotion/css";

export const databaseIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1787 7.46826C14.3208 7.46826 17.6787 6.34897 17.6787 4.96826C17.6787 3.58755 14.3208 2.46826 10.1787 2.46826C6.03658 2.46826 2.67871 3.58755 2.67871 4.96826C2.67871 6.34897 6.03658 7.46826 10.1787 7.46826Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.6787 10.8018C17.6787 12.1851 14.3454 13.3018 10.1787 13.3018C6.01204 13.3018 2.67871 12.1851 2.67871 10.8018"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.67871 4.96826V16.6349C2.67871 18.0183 6.01204 19.1349 10.1787 19.1349C14.3454 19.1349 17.6787 18.0183 17.6787 16.6349V4.96826"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const addIcon = (styles = "", stroke = "#633CE3"): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5105 4.24512V15.9118"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.67712 10.0786H16.3438"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const toggleIconMinus = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.890137"
      y="0.900391"
      width="19"
      height="19"
      rx="5.5"
      fill="white"
      stroke="#C1C7D0"
    />
    <path
      d="M6.89014 10.4004H13.8901"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const toggleIconPlus = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.19702"
      y="0.638184"
      width="19"
      height="19"
      rx="5.5"
      fill="white"
      stroke="#C1C7D0"
    />
    <path
      d="M10.697 6.63818V13.6382"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.19702 10.1382H14.197"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const airTableIconColor = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5252_55786)">
      <path
        d="M13.5859 2.89388L2.40103 7.52232C1.779 7.78013 1.78556 8.66325 2.41134 8.91122L13.6426 13.3653C14.6294 13.7567 15.7284 13.7567 16.7152 13.3653L27.9465 8.91122C28.5723 8.66279 28.5793 7.77966 27.9568 7.52232L16.7724 2.89435C15.7521 2.47207 14.6058 2.47207 13.5854 2.89435"
        fill="#FFCC00"
      />
      <path
        d="M16.1758 15.7971V26.9238C16.1759 27.0461 16.206 27.1664 16.2632 27.2744C16.3205 27.3823 16.4033 27.4747 16.5044 27.5433C16.6055 27.612 16.7219 27.6549 16.8433 27.6684C16.9648 27.6818 17.0877 27.6653 17.2014 27.6204L29.717 22.7623C29.8565 22.7068 29.9762 22.6108 30.0605 22.4866C30.1448 22.3625 30.1899 22.2158 30.19 22.0657V10.9395C30.1898 10.8173 30.1598 10.6969 30.1025 10.589C30.0453 10.481 29.9625 10.3887 29.8614 10.32C29.7603 10.2513 29.6439 10.2084 29.5224 10.195C29.401 10.1815 29.278 10.198 29.1644 10.2429L16.6487 15.101C16.5093 15.1565 16.3896 15.2525 16.3053 15.3767C16.221 15.5009 16.1759 15.6475 16.1758 15.7976"
        fill="#31C2F2"
      />
      <path
        d="M13.254 16.3717L9.16277 18.3474L1.32199 22.1045C0.825117 22.3445 0.19043 21.9826 0.19043 21.4295V10.9867C0.19043 10.787 0.292617 10.6145 0.43043 10.4851C0.486761 10.429 0.550661 10.381 0.620273 10.3426C0.807773 10.2301 1.07496 10.2001 1.3023 10.2901L13.1921 15.001C13.8015 15.241 13.8484 16.0876 13.2545 16.3721"
        fill="#ED3049"
      />
      <path
        d="M13.254 16.3716L9.53962 18.1651L0.429932 10.4841C0.486263 10.428 0.550163 10.38 0.619775 10.3416C0.807275 10.2291 1.07446 10.1991 1.30181 10.2891L13.1917 15.0001C13.801 15.2401 13.8479 16.0866 13.254 16.3712"
        fill="#C62842"
      />
    </g>
    <defs>
      <clipPath id="clip0_5252_55786">
        <rect
          width="30"
          height="30"
          fill="white"
          transform="translate(0.189941 0.125488)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const gridIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.90763 2.84741H2.24097V7.51408H6.90763V2.84741Z"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2411 2.84741H9.57446V7.51408H14.2411V2.84741Z"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2411 10.1809H9.57446V14.8476H14.2411V10.1809Z"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.90763 10.1809H2.24097V14.8476H6.90763V10.1809Z"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const notionIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5446_58344)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.44875 3.72607C4.09972 4.23103 4.33518 4.19116 5.55402 4.11143L17.036 3.44701C17.2853 3.44701 17.0776 3.20781 16.9945 3.18124L15.0831 1.86567C14.723 1.5999 14.2244 1.28098 13.2964 1.36071L2.18837 2.14473C1.7867 2.1846 1.7036 2.38393 1.86981 2.5301L3.44875 3.72607ZM4.14127 6.29075V17.8783C4.14127 18.5029 4.45984 18.7288 5.19391 18.6889L17.8116 17.9846C18.5457 17.9448 18.6288 17.5195 18.6288 17.0146V5.50672C18.6288 5.00176 18.4211 4.7227 17.9778 4.76257L4.79224 5.50672C4.30748 5.54659 4.14127 5.78578 4.14127 6.29075ZM16.5928 6.91531C16.6759 7.26081 16.5928 7.6196 16.2327 7.65946L15.6233 7.77906V16.3369C15.097 16.6026 14.6122 16.7621 14.1967 16.7621C13.5457 16.7621 13.3795 16.5628 12.8947 15.9781L8.91967 9.98495V15.7787L10.1801 16.0445C10.1801 16.0445 10.1801 16.7488 9.16898 16.7488L6.37119 16.9083C6.28809 16.7488 6.37119 16.3634 6.6482 16.2837L7.38227 16.0844V8.4302L6.37119 8.35046C6.28809 8.00496 6.49585 7.5 7.06371 7.46013L10.0693 7.26081L14.2105 13.3204V7.9651L13.1579 7.8455C13.0748 7.42027 13.4072 7.10134 13.8089 7.06148L16.5928 6.91531ZM1.26039 1.08165L12.8255 0.271053C14.2382 0.151457 14.6122 0.231188 15.4986 0.855748L19.1828 3.3407C19.7922 3.76593 20 3.88553 20 4.35063V17.9979C20 18.8484 19.6814 19.3533 18.5457 19.4331L5.12466 20.2171C4.26593 20.257 3.86427 20.1374 3.42105 19.5925L0.692521 16.204C0.207756 15.5794 0 15.1143 0 14.5695V2.43708C0 1.73279 0.33241 1.16138 1.26039 1.08165Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_5446_58344">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.224121)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const backIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.803711"
      y="0.475586"
      width="24"
      height="24.142"
      rx="6"
      fill="#C1C7D0"
    />
    <path
      d="M16.1429 12.5464H9.4646"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8038 16.3382L9.4646 12.5465L12.8038 8.75488"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const xanoIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.558 6.66056L15.7515 9.66649L16.4936 10.4707C16.9019 10.9132 17.8977 11.9815 18.7064 12.8447L20.1769 14.4142L24.4876 9.7966C26.8584 7.25687 29.1151 4.83585 29.5024 4.41682L30.2068 3.65479H25.7857H21.3647L18.558 6.66056ZM17.8688 18.1422L15.7621 20.4195L16.5382 21.3018C16.9651 21.7871 18.2379 23.1448 19.3669 24.3188L21.4195 26.4535L25.7731 26.4044L30.1266 26.3553L25.2591 21.1414C22.5818 18.2738 20.298 15.9136 20.1836 15.8964C20.0692 15.8792 19.0276 16.8899 17.8688 18.1422Z"
      fill="#0461BE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.597749 4.09596C0.822027 4.33853 3.18176 6.86992 5.84165 9.7212C8.50155 12.5725 10.6777 14.9786 10.6777 15.0681C10.6777 15.1576 8.70352 17.3367 6.29069 19.9108C3.8777 22.4847 1.52422 25.0058 1.06058 25.5131L0.217695 26.4355L4.60556 26.4325L8.99326 26.4296L14.1871 20.8839C17.0438 17.8339 19.3901 15.2338 19.401 15.106C19.4121 14.9781 17.0748 12.3514 14.2072 9.26879L8.99326 3.66409L4.5916 3.65944L0.189941 3.65479L0.597749 4.09596Z"
      fill="#0C9AE3"
    />
  </svg>
);

export const sampleDataIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5252_55791)">
      <path
        d="M28.5025 18.113L15.19 27.788L1.8775 18.113C1.69903 17.9818 1.56665 17.7974 1.49929 17.5864C1.43194 17.3753 1.43306 17.1484 1.5025 16.938L3.0275 12.213L6.0775 2.8255C6.10708 2.74901 6.15417 2.68051 6.215 2.6255C6.31405 2.53503 6.44335 2.48486 6.5775 2.48486C6.71165 2.48486 6.84095 2.53503 6.94 2.6255C7.00423 2.68758 7.05156 2.76502 7.0775 2.8505L10.1275 12.213H20.2525L23.3025 2.8255C23.3321 2.74901 23.3792 2.68051 23.44 2.6255C23.5391 2.53503 23.6684 2.48486 23.8025 2.48486C23.9367 2.48486 24.066 2.53503 24.165 2.6255C24.2292 2.68758 24.2766 2.76502 24.3025 2.8505L27.3525 12.238L28.94 16.938C29.0032 17.1549 28.9947 17.3863 28.9159 17.598C28.8371 17.8096 28.6921 17.9903 28.5025 18.113Z"
        stroke="#595B5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5252_55791">
        <rect
          width="30"
          height="30"
          fill="white"
          transform="translate(0.189941 0.125488)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const cheveronRight = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const errorIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 3.75L3.75 11.25"
      stroke="#C22525"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 3.75L11.25 11.25"
      stroke="#C22525"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const successIcon = (styles = ""): JSX.Element => (
  <svg
    className={cx(styles)}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 3.75L5.625 10.625L2.5 7.5"
      stroke="#22CDC0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const circlePlaceholderImage = (
  styles = "",
  circleColor = "rgb(229 231 235)"
): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.0546875"
      y="0.628418"
      width="41"
      height="41"
      rx="20.5"
      fill={circleColor}
    />
  </svg>
);

export const refreshIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5450_57389)">
      <path
        d="M15.3335 3.26807V7.01807H11.5835"
        stroke="#633CE3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7647 10.1428C13.3584 11.2928 12.5894 12.2795 11.5735 12.9544C10.5576 13.6293 9.34996 13.9557 8.13243 13.8844C6.91491 13.8132 5.75352 13.3482 4.82327 12.5595C3.89302 11.7708 3.24431 10.7011 2.9749 9.51162C2.70549 8.32214 2.82997 7.07732 3.32958 5.96475C3.8292 4.85217 4.67688 3.93212 5.74489 3.34323C6.8129 2.75434 8.04338 2.52852 9.2509 2.6998C10.4584 2.87107 11.5776 3.43017 12.4397 4.29283L15.3334 7.01783"
        stroke="#633CE3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5450_57389">
        <rect
          width="15"
          height="15"
          fill="white"
          transform="translate(0.958496 0.768066)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const searchIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.18272 13.2995C11.1335 13.2995 13.5256 10.9117 13.5256 7.96615C13.5256 5.02063 11.1335 2.63281 8.18272 2.63281C5.23193 2.63281 2.83984 5.02063 2.83984 7.96615C2.83984 10.9117 5.23193 13.2995 8.18272 13.2995Z"
      stroke="#8C939E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8612 14.6329L11.9561 11.7329"
      stroke="#8C939E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const typographyIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.50293 5.27637V3.27637H14.1696V5.27637"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.83618 13.9434H10.8362"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.83618 3.27637V13.943"
      stroke="#595B5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const hashIcon = (styles = "", stroke = "#595B5C"): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.27264 6H13.9393"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.27264 10H13.9393"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.2726 2L5.93927 14"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2726 2L9.93927 14"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const externalLinkIcon = (
  styles = "",
  stroke = "#633CE3"
): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0659 9.58317V13.5832C12.0659 13.9368 11.9254 14.2759 11.6754 14.526C11.4253 14.776 11.0862 14.9165 10.7326 14.9165H3.39925C3.04563 14.9165 2.70649 14.776 2.45644 14.526C2.20639 14.2759 2.06592 13.9368 2.06592 13.5832V6.24984C2.06592 5.89622 2.20639 5.55708 2.45644 5.30703C2.70649 5.05698 3.04563 4.9165 3.39925 4.9165H7.39925"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0659 2.9165H14.0659V6.9165"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.73254 10.2498L14.0659 2.9165"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const circledSuccess = (styles = "", fill = "#633CE3"): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="10.459" cy="11.4165" rx="10" ry="10.5" fill={fill} />
    <path
      d="M14.8449 7.9624L8.81423 14.2946L6.073 11.4163"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const playIcon = (styles = ""): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 2.25L14.25 9L3.75 15.75V2.25Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const toggleIconDisabled = (
  styles = "",
  toggleFill = "#595B5C"
): JSX.Element => (
  <svg
    className={styles}
    viewBox="0 0 26 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 8C0 3.58172 3.58172 0 8 0H18C22.4183 0 26 3.58172 26 8V8C26 12.4183 22.4183 16 18 16H8C3.58172 16 0 12.4183 0 8V8Z"
      fill={toggleFill}
    />
    <rect x="12" y="2" width="12" height="12" rx="6" fill="white" />
  </svg>
);
