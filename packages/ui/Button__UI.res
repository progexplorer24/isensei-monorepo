module Styles = {
  open Tailwind
  let red = twStyle([bg(#red400)])
}

@react.component
let make = () => <div className=Tailwind.merge(. [Styles.red]) > {React.string("Component Button")} </div>
