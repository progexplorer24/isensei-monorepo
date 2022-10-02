import { Client } from "@notionhq/client";
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

  console.log(notion);

  return {
    props: {
      roadmap: data,
    },
  };
};

export default Roadmap;
