let btn = Button__UI.make
let btn2 = Button__UI.make

let tipGood = Tip__UI.TipGood.make
let tipBad = Tip__UI.TipBad.make
let tipCompat = Tip__UI.TipCompat.make
let tipInfo = Tip__UI.TipInfo.make
let menu = Headless__Examples.Menu.make
let dropdown = _as => <Headless__Examples.Dropdown _as />
let listbox = <Headless__Examples.Listbox />
let _switch = <Headless__Examples.Switch />
let disclosure = <Headless__Examples.Disclosure />
let popover = <Headless__Examples.Popover />
let dialog = <Headless__Examples.Dialog />
let radioGroup = <Headless__Examples.RadioGroup />
let tabs = Headless__Examples.Tabs.make

module Card = {
  module Styles = {
    open Tailwind
    let div = twStyle([
      block,
      maxW(#xl),
      mxAuto,
      rounded(#all(#lg)),
      p(#all(#6)),
      bg(#white),
      ring(~width=#1, ~color=#slate900, ()),
      shadow(#lg(#black)),
      space(#y(#3)),
      hover([bg(#sky500), ring(~width=#1, ~color=#sky500, ())]),
    ])
    let flex = twStyle([flex, itemsCenter, space(#x(#3))])
    let heading = isHovered =>
      twStyle([
        textColor(#slate900),
        textSize(#sm),
        fontWeight(#600),
        isHovered ? textColor(#white) : emptyRule,
      ])
    let p = isHovered =>
      twStyle([textColor(#slate500), isHovered ? textColor(#white) : emptyRule, textSize(#sm)])
    let svg = isHovered =>
      twStyle([
        h(#6),
        w(#6),
        textColor(#sky500),
        stroke(#sky500),
        isHovered ? stroke(#white) : emptyRule,
      ])
  }
  @react.component
  let make = () => {
    let (hoverState, setHoverState) = React.useState(_ => false)
    let onMouseEnter = _ => setHoverState(_ => true)
    let onMouseLeave = _ => setHoverState(_ => false)
    <div className=Styles.div onMouseEnter onMouseLeave>
      <div className=Styles.flex>
        <Heroicons.Solid.FolderAddIcon className={Styles.svg(hoverState)} />
        <h3 className={Styles.heading(hoverState)}> {React.string("New project")} </h3>
      </div>
      <p className={Styles.p(hoverState)}>
        {React.string("Create a new project from a variety of starting templates.")}
      </p>
    </div>
  }
}
