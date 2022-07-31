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
        title={`${t("privacyPolicy:title")} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="space-y-2 border-b border-gray-200 pt-6 pb-8 dark:border-gray-700 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t("privacyPolicy:title")}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("privacyPolicy:subtitle")}
          </p>
        </div>
        <div className="mt-16 text-gray-200">
          <p className="text-gray-600 dark:text-gray-400">
            {t("privacyPolicy:content")}
          </p>
        </div>
      </div>
    </>
  );
}
