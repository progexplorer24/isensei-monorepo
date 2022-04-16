import {
  btn2 as Button,
  tipGood as TipGood,
  tipCompat as TipCompat,
  tipInfo as TipInfo,
  menu as Menu,
  tabs as Tabs,
  _switch,
  Card,
} from "@isensei/ui";

export default function Test() {
  return (
    <div className="space-y-6">
      <Button href="" color="indigo">
        Another Button
      </Button>
      <Button href="">Another Button</Button>
      <TipGood>This is good advice</TipGood>
      <TipCompat>This is compat advice</TipCompat>
      <TipInfo>This is info advice</TipInfo>
      <Menu />
      <Tabs />
      <Card.make />
    </div>
  );
}
