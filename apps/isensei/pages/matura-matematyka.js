import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import siteMetadata from "@/data/siteMetadata";
import projectsData from "@/data/projectsData";
import Card from "@/components/Card";
import NoTranslation from "@/components/NoTranslation";
import { PageSEO } from "@/components/SEO";

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation();
  return (
    <>
      <PageSEO
        title={`${t("headerNavLinks:matura")} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t("matura:title")}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("matura:subtitle")}
          </p>
        </div>
        <div className="mt-16 text-gray-200">
          {locale === "pl" ? (
            <p>Witaj na Polskiej stronie!</p>
          ) : (
            <NoTranslation language="en" />
          )}
        </div>
      </div>
    </>
  );
}
