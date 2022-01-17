/* eslint-disable jsx-a11y/no-onchange */
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import cn from "classnames";

import links from "@/data/links";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import FooterNew from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
      href={href}
    >
      {text}
    </Link>
  );
}
const textArr = ["home", "blog", "tags", "projects"];

function Header({ changeLanguage, locale, locales, t }) {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex items-center text-base leading-5">
        <div className="hidden md:block">
          {[links.home, links.blog, links.tags, links.projects].map(
            (item, i) => (
              <NavItem
                key={item}
                href={item}
                text={t(`headerNavLinks:${textArr[i]}`)}
              />
            )
          )}
        </div>

        <MobileNav />
      </div>
      <div className="flex items-center">
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          style={{ textAlignLast: "center" }}
          // dark:  hover:ring-2 ring-gray-300  transition-all
          className="text-gray-900 h-9 rounded-lg focus:ring-2 focus:ring-gray-300 dark:text-gray-100 border-0 text-shadow-sm text-sm bg-gray-200 dark:bg-gray-600 tracking-wide mr-4"
        >
          {locales.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <ThemeSwitch />
      </div>
    </header>
  );
}

const LayoutWrapper = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <Header
          changeLanguage={changeLanguage}
          locale={locale}
          locales={locales}
          t={t}
        />
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
        >
          {children}
        </main>
        <FooterNew />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
