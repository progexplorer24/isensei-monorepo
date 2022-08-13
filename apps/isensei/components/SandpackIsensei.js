import { Sandpack } from "@codesandbox/sandpack-react";

const SandpackIsensei = ({ file }) => {
  const code = `import PageTitle from "/PageTitle.js";
  export default function App(): JSX.Element {
  return <PageTitle>Hello world!</PageTitle>
}`;

  const customSetup = {
    dependencies: {
      "@emotion/css": "^11.9.0",
      tailwindcss: "^3.1.6",
    },
  };

  const options = { externalResources: ["https://cdn.tailwindcss.com"] };

  return (
    <Sandpack
      template="react-ts"
      theme="dark"
      options={options}
      files={{
        "/App.tsx": code,
        "/PageTitle.js": file,
      }}
      customSetup={customSetup}
    />
  );
};

export default SandpackIsensei;
