// Generated by ReScript, PLEASE EDIT WITH CARE

function toValue(spacing) {
  if (spacing === "widest") {
    return {
      NAME: "em",
      VAL: 0.1,
    };
  } else if (spacing === "wide") {
    return {
      NAME: "em",
      VAL: 0.025,
    };
  } else if (spacing === "tighter") {
    return {
      NAME: "em",
      VAL: -0.05,
    };
  } else if (spacing === "tight") {
    return {
      NAME: "em",
      VAL: -0.025,
    };
  } else if (spacing === "normal") {
    return {
      NAME: "em",
      VAL: 0,
    };
  } else {
    return {
      NAME: "em",
      VAL: 0.05,
    };
  }
}

export { toValue };
/* No side effect */
