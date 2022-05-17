import useTranslation from "next-translate/useTranslation";

import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation();
  return (
    <>
      <PageSEO
        title={`${t("contact:title")} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t("contact:title")}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("contact:subtitle")}
          </p>
        </div>
        <div className="mt-16 text-gray-200">
          <p className="text-gray-600 dark:text-gray-400">
            {t("contact:content")}
          </p>
        </div>
      </div>
    </>
  );
}
