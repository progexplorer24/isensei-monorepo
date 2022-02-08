import {
  btn,
  btn2,
  tipGood,
  tipBad,
  tipCompat,
  tipInfo,
  menu,
  dropdown,
  tabs,
  listbox,
  _switch,
  radioGroup,
  popover,
  disclosure,
} from "@isensei/ui";

export default function Test() {
  return (
    <div>
      {btn("", "Hello Link")}
      {btn2("", "Another Button")}
      {tipGood("This is good advice")}
      {tipBad("This is bad advice")}
      {tipCompat("This is compat advice")}
      {tipInfo("This is info advice")}
      {menu}
      {dropdown("div")}
      {tabs}
      {listbox}
      {_switch}
      {radioGroup}
      {popover}
      {disclosure}
    </div>
  );
}
