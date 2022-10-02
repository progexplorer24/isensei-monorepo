// import useTranslation from "next-translate/useTranslation";
import siteMetadata from "@/data/siteMetadata";
import { getFileBySlug } from "@/lib/mdx";
import { PageSEO } from "@/components/SEO";
import { MDXLayoutRenderer } from "@/components/MDXComponents";

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : "";
  const privacyPolicy = await getFileBySlug(
    "legal",
    [`terms-of-service`],
    otherLocale
  );
  return { props: { privacyPolicy, availableLocales: locales } };
}

export default function TermsOfService({
  privacyPolicy,
  locale,
  availableLocales,
}) {
  const { frontMatter, mdxSource } = privacyPolicy;

  return (
    <>
      <PageSEO
        title={`${frontMatter.title} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="space-y-2 border-b border-gray-200 pt-6 pb-8 dark:border-gray-700 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {frontMatter.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {frontMatter.summary}
          </p>
        </div>

        <MDXLayoutRenderer
          layout={frontMatter.layout || "StatuteLayout"}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          availableLocales={availableLocales}
        />
      </div>
    </>
  );
}
