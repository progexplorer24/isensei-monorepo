const linearGradient = (
  direction = "to right",
  color1 = "rgb(215, 36, 168)",
  color2 = "rgb(99, 60, 227)",
  color3 = "rgb(34, 205, 192)"
) => `linear-gradient(${direction}, ${color1}, ${color2} 50%, ${color3} 75%)`;

export const colorPalette = {
  white: "#ffffff",
  superLightGrey: "#F4F5F8",
  borderGrey: "#C1C7D0",
  darkerGrey: "#8C939E",
  almostBlack: "#595B5C",
  notes: "#C22525",
  airconnexPurple: "#633CE3",
  hiGreen: "#22CDC0",
  gradient: linearGradient(),
  orange: "#F6A428",
  pending: "#F1C146",
  indigo: "#5F4BE3",
  navy: "#2B3F57",
  shockingPink: "#E81EB5",
  pictonBlue: "#1EB5E8",
  wormGreen: "#B5E81E",
  pictonBlueShade70: "#093646",
  black: "#000000",
  superLightPurple: "rgba(99, 60, 227, 0.1)",
  screenMode: "#D9429D",
  logicMode: "#25A6A6",
  actionMode: "#1EA6D1",
  teal700: "#285E61",
  action10: "rgba(30, 166, 209, 0.1)",
  screen10: "rgba(217, 66, 157, 0.1)",
  logic10: "rgba(99, 60, 227, 0.1)",
};
