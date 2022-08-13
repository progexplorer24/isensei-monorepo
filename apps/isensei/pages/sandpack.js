import fs from "fs";
import process from "process";
import useTranslation from "next-translate/useTranslation";
import SandpackIsensei from "../components/SandpackIsensei";

export const getStaticProps = () => {
  const rawData = fs.readFileSync(
    process.cwd() + "/components/PageTitle.js",
    "utf8"
  );
  console.log(rawData);
  return {
    props: {
      files: rawData,
    },
  };
};

export default function Snippets({ locale, availableLocales, files }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t("snippets:title")}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("snippets:subtitle")}
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <SandpackIsensei file={files} />
          </div>
        </div>
      </div>
    </>
  );
}
