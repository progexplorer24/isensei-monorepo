/* eslint-disable jsx-a11y/no-onchange */
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Logo from "@/data/logo.svg";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
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
              className="text-gray-900 dark:text-gray-100 text-shadow-sm text-sm bg-white dark:bg-gray-900 tracking-wide"
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
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
