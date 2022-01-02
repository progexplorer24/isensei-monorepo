/* eslint-disable jsx-a11y/no-onchange */
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import FooterNew from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const LayoutWrapper = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                </Link>
              ))}
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
        <main className="mb-auto">{children}</main>
        <FooterNew />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
