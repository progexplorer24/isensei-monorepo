module Styles = {
  open Tailwind

  type colorVariants = [#indigo | #pink | #sky | #blue | #gray]

  type darkVariant = [#gray | #sky]

  let toDarkValue = (variant, ~isGroup: bool) =>
    switch variant {
    | #gray =>
      twStyle([
        dark([
          bg(#slate700),
          textColor(#slate100),
          hover([bg(#slate600), textColor(#white), isGroup ? textColor(#slate400) : emptyRule]),
          focus([ring(~color=#slate500, ())]),
        ]),
      ])
    | #sky =>
      twStyle([
        dark([
          bg(#sky500),
          textColor(#sky50),
          hover([bg(#sky400), textColor(#white), isGroup ? textColor(#sky100) : emptyRule]),
          focus([ring(~color=#sky200, ())]),
        ]),
      ])
    }

  let toValue = (variant, ~isGroup: bool) =>
    switch variant {
    | #indigo =>
      twStyle([
        bg(#indigo50),
        textColor(#indigo600),
        hover([bg(#indigo200), isGroup ? textColor(#indigo400) : emptyRule]),
        focus([ring(~color=#indigo500, ())]),
      ])
    | #pink =>
      twStyle([
        bg(#pink50),
        textColor(#pink600),
        hover([bg(#pink100), textColor(#pink700), isGroup ? textColor(#pink400) : emptyRule]),
        focus([ring(~color=#pink600, ())]),
      ])
    | #sky =>
      twStyle([
        bg(#sky50),
        textColor(#sky600),
        hover([bg(#sky100), textColor(#sky700), isGroup ? textColor(#sky400) : emptyRule]),
        focus([ring(~color=#sky600, ())]),
      ])
    | #blue =>
      twStyle([
        bg(#blue50),
        textColor(#blue600),
        hover([bg(#blue100), textColor(#blue700), isGroup ? textColor(#blue400) : emptyRule]),
        focus([ring(~color=#blue600, ())]),
      ])
    | #gray =>
      twStyle([
        bg(#slate100),
        textColor(#slate700),
        hover([bg(#slate200), textColor(#slate900), isGroup ? textColor(#slate400) : emptyRule]),
        focus([ring(~color=#slate500, ())]),
      ])
    }

  let svg = (~color, ~darkColor, ~reverse, ~isGroup, ()) =>
    merge(. [
      twStyle([overflowVisible, reverse ? m(#r(#3)) : m(#l(#3))]),
      toValue(color, ~isGroup),
      toDarkValue(darkColor, ~isGroup),
    ])

  let a = (~color, ~darkColor, ~reverse, ~isGroup, ()) =>
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
      toValue(color, ~isGroup),
      toDarkValue(darkColor, ~isGroup),
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
  let (isHovered, setIsHovered) = React.useState(_ => false)
  let onMouseEnter = _ => setIsHovered(_ => true)
  let onMouseLeave = _ => setIsHovered(_ => false)
  <a
    href
    onMouseEnter
    onMouseLeave
    className={Tailwind.merge(. [
      Styles.a(~color, ~darkColor, ~reverse, ~isGroup=isHovered, ()),
      className,
    ])}>
    {children}
    <svg
      width="3"
      height="6"
      className={Styles.svg(~color, ~darkColor, ~reverse, ~isGroup=isHovered, ())}
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
