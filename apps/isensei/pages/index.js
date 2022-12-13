import Image from "next/legacy/image";
import Link from "@/components/Link";
import Hero from "@/components/Hero";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import useTranslation from "next-translate/useTranslation";

import NewsletterForm from "@/components/NewsletterForm";

const MAX_DISPLAY = 5;

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : "";
  const posts = await getAllFilesFrontMatter("blog", otherLocale);

  return { props: { posts, locale, availableLocales: locales } };
}

export default function Home({ posts, locale, availableLocales }) {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <Hero />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h2 className="mb-1 text-5xl font-bold tracking-tight text-black dark:text-white">
                iSensei
              </h2>
              <h3 className="mb-4 text-gray-700 dark:text-gray-200">
                {t("bio:subtitle")}
              </h3>
              <p className="mb-16 text-gray-600 dark:text-gray-400">
                {t("bio:aboutMe")}
              </p>
            </div>
            <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
              <Image
                alt="isensei smiling face"
                height={176}
                width={176}
                src="/static/images/avatar.png"
                className="rounded-full grayscale filter"
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            {t("common:greeting")}
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t("common:homeDescription")}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{t("common:pub")}</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-sky-700 hover:text-sky-500 dark:text-primary-500 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          {t("common:more")} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-sky-700 hover:text-sky-500 dark:text-primary-500 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            {t("common:all")} &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== "" && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title={t("newsletter:title")} />
        </div>
      )}
    </>
  );
}
