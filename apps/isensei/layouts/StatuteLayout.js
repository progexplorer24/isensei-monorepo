import SectionContainer from "@/components/SectionContainer";

import useTranslation from "next-translate/useTranslation";

export default function StatuteLayout({ children, availableLocales }) {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <article>
        <div className="xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
