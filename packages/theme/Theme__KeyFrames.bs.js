// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";

var spin = CssJs.keyframes([
      [
        0,
        [CssJs.transform({
                NAME: "rotate",
                VAL: {
                  NAME: "deg",
                  VAL: 0
                }
              })]
      ],
      [
        100,
        [CssJs.transform({
                NAME: "rotate",
                VAL: {
                  NAME: "deg",
                  VAL: 360
                }
              })]
      ]
    ]);

var ping = CssJs.keyframes([
      [
        0,
        [
          CssJs.transform({
                NAME: "scale",
                VAL: [
                  1,
                  1
                ]
              }),
          CssJs.opacity(1)
        ]
      ],
      [
        75,
        [
          CssJs.transform({
                NAME: "scale",
                VAL: [
                  2,
                  2
                ]
              }),
          CssJs.opacity(0)
        ]
      ],
      [
        100,
        [
          CssJs.transform({
                NAME: "scale",
                VAL: [
                  2,
                  2
                ]
              }),
          CssJs.opacity(0)
        ]
      ]
    ]);

var pulse = CssJs.keyframes([
      [
        0,
        [CssJs.opacity(1)]
      ],
      [
        50,
        [CssJs.opacity(0.5)]
      ],
      [
        100,
        [CssJs.opacity(1)]
      ]
    ]);

var bounce = CssJs.keyframes([
      [
        0,
        [
          CssJs.transform({
                NAME: "translateY",
                VAL: {
                  NAME: "percent",
                  VAL: -25
                }
              }),
          CssJs.animationTimingFunction({
                NAME: "cubicBezier",
                VAL: [
                  0.8,
                  0,
                  1,
                  1
                ]
              })
        ]
      ],
      [
        50,
        [
          CssJs.transform({
                NAME: "translateY",
                VAL: {
                  NAME: "percent",
                  VAL: 0
                }
              }),
          CssJs.animationTimingFunction({
                NAME: "cubicBezier",
                VAL: [
                  0,
                  0,
                  0.2,
                  1
                ]
              })
        ]
      ],
      [
        100,
        [
          CssJs.transform({
                NAME: "translateY",
                VAL: {
                  NAME: "percent",
                  VAL: -25
                }
              }),
          CssJs.animationTimingFunction({
                NAME: "cubicBezier",
                VAL: [
                  0.8,
                  0,
                  1,
                  1
                ]
              })
        ]
      ]
    ]);

function toValue(animation) {
  if (animation === "pulse") {
    return pulse;
  } else if (animation === "spin") {
    return spin;
  } else if (animation === "bounce") {
    return bounce;
  } else {
    return ping;
  }
}

export {
  spin ,
  ping ,
  pulse ,
  bounce ,
  toValue ,
  
}
/* spin Not a pure module */
