import useTranslation from "next-translate/useTranslation";
import { MDXLayoutRenderer } from "@/components/MDXComponents";
import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";
import { getFileBySlug } from "@/lib/mdx";

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : "";
  const statute = await getFileBySlug("./statute", [`statute`], otherLocale);
  return { props: { statute, availableLocales: locales } };
}

export default function Statute({ locale, availableLocales, statute }) {
  const { t } = useTranslation();
  const { mdxSource } = statute;
  return (
    <>
      <PageSEO
        title={`${t("statute:title")} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t("statute:title")}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("statute:subtitle")}
          </p>
        </div>
        <div className="text-gray-200 text-left">
          <MDXLayoutRenderer
            layout="StatuteLayout"
            mdxSource={mdxSource}
            availableLocales={availableLocales}
          />
        </div>
      </div>
    </>
  );
}
