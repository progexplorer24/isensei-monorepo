import { Client } from "@notionhq/client";
// Notion API page example
const Roadmap = ({ roadmap }) => {
  return <pre>{JSON.stringify(roadmap, null, 2)}</pre>;
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });
  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const pages = data.results.filter((result) => result.type === "child_page");

  return {
    props: {
      roadmap: pages,
    },
  };
};

export default Roadmap;
