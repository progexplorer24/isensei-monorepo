open Tailwind
module Styles = {
  let wrapper = twStyle([flex, itemsStart, m(#y(#6)), space(#x(#4))])
  let commonTip = twStyle([
    relative,
    m(#t(#1)),
    w(#4),
    h(#4),
    rounded(#all(#full)),
    textColor(#white),
    flex,
    itemsCenter,
    justifyCenter,
  ])
  let tipGood = merge(. [
    commonTip,
    twStyle([
      bg(#cyan500),
      ring(~width=#2, ~color=#cyan500, ()),
      dark([bg(#sky500), ring(~width=#2, ~color=#sky500, ())]),
    ]),
  ])
  let tipBad = merge(. [
    commonTip,
    twStyle([
      bg(#rose400),
      ring(~width=#2, ~color=#rose400, ()),
      dark([bg(#red400), ring(~width=#2, ~color=#red400, ())]),
    ]),
  ])

  let overflow = twStyle([overflowVisible])

  let customLine = twStyle([
    absolute,
    top(#full),
    m(#t(#1)),
    left(#rem(0.46875)),
    h(#rem(1.375)),
    w(#px1),
    bg(~opacity=0.3, #cyan500),
    rounded(#all(#full)),
    dark([bg(#blue400)]),
  ])
  //  bg-rose-200 rounded-full dark:bg-red-200/25"
  let customLineGood = merge(. [customLine, twStyle([])])

  let customLineBad = merge(. [
    customLine,
    twStyle([bg(#rose200), dark([bg(~opacity=0.25, #red200)])]),
  ])

  let paragraph = twStyle([
    m(#all(#0)),
    flex1,
    textSize(#base),
    fontWeight(#600),
    textColor(#slate900),
    dark([textColor(#slate200)]),
  ])
  // "text-sm bg-sky-100 text-sky-800 font-medium px-4 py-3 mb-4 rounded-xl"
  let compatWrapper = twStyle([
    textSize(#sm),
    bg(#sky100),
    textColor(#sky800),
    fontWeight(#500),
    p(#x(#4)),
    p(#y(#3)),
    m(#b(#4)),
    rounded(#all(#xl)),
  ])

  // Tip Compat
  let compatFlex = twStyle([flex, itemsStart, space(#x(#3))])
  let compatSvg = twStyle([textColor(#sky500)])
  let compatP = twStyle([flex1])

  // Tip Info
  // TODO: "not-prose"
  let infoWrapper = twStyle([m(#t(#6)), m(#b(#px(-4))), flex, space(#x(#2))])
  let infoSvg = twStyle([
    flexNone,
    w(#5),
    h(#5),
    textColor(#slate400),
    dark([textColor(#slate600)]),
  ])
  let infoP = twStyle([
    textColor(#slate700),
    textSize(#sm),
    fontWeight(#500),
    dark([textColor(#slate200)]),
  ])
}

module TipGood = {
  @react.component
  let make = (~children) =>
    <div className={Tailwind.merge(. [Styles.wrapper])}>
      <div className={Tailwind.merge(. [Styles.tipGood])}>
        <svg
          width="6" height="4.5" className={Tailwind.merge(. [Styles.overflow])} ariaHidden={true}>
          <path
            d="M6 0L2 4.5L0 2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className=Styles.customLineGood />
      </div>
      <p className=Styles.paragraph> {children} </p>
    </div>
}

module TipBad = {
  @react.component
  let make = (~children) =>
    <div className=Styles.wrapper>
      <div className=Styles.tipBad>
        <svg width="6" height="6" className=Styles.overflow ariaHidden={true}>
          <path
            d="M0 0L6 6M6 0L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className=Styles.customLineBad />
      </div>
      <p className=Styles.paragraph> {children} </p>
    </div>
}

module TipCompat = {
  @react.component
  let make = (~children) =>
    <div className=Styles.compatWrapper>
      <div className=Styles.compatFlex>
        <svg width="20" height="20" className=Styles.compatSvg fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"
          />
        </svg>
        <p className=Styles.compatP> {children} </p>
      </div>
    </div>
}

module TipInfo = {
  @react.component
  let make = (~children) =>
    <div className=Styles.infoWrapper>
      <svg className=Styles.infoSvg viewBox="0 0 20 20" fill="currentColor" ariaHidden={true}>
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <p className=Styles.infoP> {children} </p>
    </div>
}
