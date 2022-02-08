module Styles = {
  open Tailwind

  type colorVariants = [#indigo | #pink | #sky | #blue | #gray]

  type darkVariant = [#gray | #sky]

  // gray: [
  //   'dark:text-slate-500 dark:group-hover:text-slate-400',
  // ],
  // sky: [

  //   'dark:text-sky-300 dark:group-hover:text-sky-100',
  // ],
  let toDarkValue = variant =>
    switch variant {
    | #gray =>
      twStyle([
        dark([
          bg(#slate700),
          textColor(#slate100),
          hover([bg(#slate600), textColor(#white)]),
          focus([ring(~color=#slate500, ())]),
        ]),
      ])
    | #sky =>
      twStyle([
        dark([
          bg(#sky500),
          textColor(#sky50),
          hover([bg(#sky400), textColor(#white)]),
          focus([ring(~color=#sky200, ())]),
        ]),
      ])
    }

  let toValue = variant =>
    switch variant {
    | #indigo =>
      twStyle([
        bg(#indigo50),
        textColor(#indigo600),
        hover([bg(#indigo200)]),
        focus([ring(~color=#indigo500, ())]),
      ])
    | #pink =>
      twStyle([
        bg(#pink50),
        textColor(#pink600),
        hover([bg(#pink100), textColor(#pink700)]),
        focus([ring(~color=#pink600, ())]),
      ])
    //   sky: [
    //  group-hover:text-sky-400',
    //   ],
    | #sky =>
      twStyle([
        bg(#sky50),
        textColor(#sky600),
        hover([bg(#sky100), textColor(#sky700)]),
        focus([ring(~color=#sky600, ())]),
      ])
    //   blue: [
    //      group-hover:text-blue-400',
    //   ],
    | #blue =>
      twStyle([
        bg(#blue50),
        textColor(#blue600),
        hover([bg(#blue100), textColor(#blue700)]),
        focus([ring(~color=#blue600, ())]),
      ])
    //   gray: [
    //     'text-slate-300 group-hover:text-slate-400',
    //   ],
    // }
    | #gray =>
      twStyle([
        bg(#slate100),
        textColor(#slate700),
        hover([bg(#slate200), textColor(#slate900)]),
        focus([ring(~color=#slate500, ())]),
      ])
    }

  let svg = (~color, ~darkColor, ~reverse, ()) =>
    merge(. [
      twStyle([overflowVisible, reverse ? m(#r(#3)) : m(#l(#3))]),
      toValue(color),
      toDarkValue(darkColor),
    ])

  let a = (~color, ~darkColor, ~reverse, ()) =>
    merge(. [
      twStyle([
        inlineFlex,
        itemsCenter,
        h(#9),
        rounded(#all(#full)),
        fontWeight(#600),
        whitespaceNowrap,
        p(#x(#3)),
        reverse ? flexRowReverse : emptyRule,
        focus([outlineNone, ring(~width=#2, ~color=#black, ())]),
      ]),
      toValue(color),
      toDarkValue(darkColor),
    ])
}

@react.component
let make = (
  ~color=#gray,
  ~darkColor=#gray,
  ~href,
  ~children,
  ~className="",
  ~reverse=false,
  (),
) => {
  <a href className={Tailwind.merge(. [Styles.a(~color, ~darkColor, ~reverse, ()), className])}>
    {children}
    <svg
      width="3"
      height="6"
      className={Styles.svg(~color, ~darkColor, ~reverse, ())}
      viewBox="0 0 3 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d={reverse ? "M3 0L0 3L3 6" : "M0 0L3 3L0 6"} />
    </svg>
  </a>
}
