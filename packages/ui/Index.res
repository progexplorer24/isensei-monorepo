module Button1 = {
  @react.component
  let make = () => <div> {React.string("Component Button")} </div>
}

let btn = <div> {React.string("Button")} </div>

let btn2 = <Button__UI />
