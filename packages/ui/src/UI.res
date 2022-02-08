let btn = (~href, ~children, ~color=#indigo, ()) => <Button__UI href color> children </Button__UI>

let btn2 = (~href, ~children, ()) => <Button__UI href> children </Button__UI>

let tipGood = children => <Tip__UI.TipGood> children </Tip__UI.TipGood>
let tipBad = children => <Tip__UI.TipBad> children </Tip__UI.TipBad>
let tipCompat = children => <Tip__UI.TipCompat> children </Tip__UI.TipCompat>
let tipInfo = children => <Tip__UI.TipInfo> children </Tip__UI.TipInfo>
let menu = <Headless__Examples.Menu />
let dropdown = _as => <Headless__Examples.Dropdown _as />
let listbox = <Headless__Examples.Listbox />
let _switch = <Headless__Examples.Switch />
let disclosure = <Headless__Examples.Disclosure />
let popover = <Headless__Examples.Popover />
let dialog = <Headless__Examples.Dialog />
let radioGroup = <Headless__Examples.RadioGroup />
let tabs = <Headless__Examples.Tabs />
