module Button1 = {
  @react.component
  let make = () => <div> {React.string("Component Button")} </div>
}

let btn = <div> {React.string("Button")} </div>

let btn2 = <Button__UI />

let tipGood = children => <Tip__UI.TipGood> children </Tip__UI.TipGood>
let tipBad = children => <Tip__UI.TipBad> children </Tip__UI.TipBad>
let tipCompat = children => <Tip__UI.TipCompat> children </Tip__UI.TipCompat>
let tipInfo = children => <Tip__UI.TipInfo> children </Tip__UI.TipInfo>
