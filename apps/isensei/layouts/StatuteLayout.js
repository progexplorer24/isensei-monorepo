import SectionContainer from "@/components/SectionContainer";

import useTranslation from "next-translate/useTranslation";

export default function StatuteLayout({ children, availableLocales }) {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <article>
        <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
