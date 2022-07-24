import { cx } from "@emotion/css";
import { colorPalette } from "./colorPalette";
import Container from "./Container";
import ContainerHeader from "./ContainerHeader";
import DetailsList from "./DetailsList";
import {
  addIcon,
  airTableIconColor,
  databaseIcon,
  gridIcon,
  notionIcon,
  toggleIconMinus,
  toggleIconPlus,
} from "./Icons";
import { typography } from "./typography";

export type DetailsListData = {
  sectionTitle: string;
  icon: JSX.Element;
  borderColor: string;
};

const dataObject: DetailsListData[] = [
  {
    sectionTitle: "GQ",
    icon: airTableIconColor("w-5 h-5"),
    borderColor: colorPalette.hiGreen,
  },
  {
    sectionTitle: "Vouge Lineup",
    icon: notionIcon("w-5 h-5"),
    borderColor: "#f7a428",
  },
  {
    sectionTitle: "My Ecommerce Data",
    icon: airTableIconColor("w-5 h-5"),
    borderColor: "#1ea6d1",
  },
];

const DataView = () => {
  return (
    <Container widthInPx={280} className={cx("px-5 pt-4 pb-6")}>
      <ContainerHeader
        iconLeft={databaseIcon("w-5 h-5")}
        iconRight={addIcon("h-5 w-5")}
        textStyles={typography.textM}
      >
        Data
      </ContainerHeader>
      {dataObject.map((element) => (
        <DetailsList
          data={element}
          key={element.sectionTitle}
          gridIcon={gridIcon("mr-2 inline-block h-4 w-4")}
          toggleIconOpen={toggleIconMinus("mr-4 inline-block h-4 w-4")}
          toggleIconClose={toggleIconPlus("mr-4 inline-block h-4 w-4")}
          headerStyles={typography.textM}
          toggleStyles={typography.textS}
          textStyles={typography.textXs}
        />
      ))}
    </Container>
  );
};

export default DataView;
