/* eslint-disable jsx-a11y/no-onchange */
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
// import cn from "classnames";
import { cx } from "@emotion/css";

import links from "@/data/links";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import FooterNew from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useAuth } from "@/lib/auth/auth";
import { lockClosed, logOut } from "@/icons/icons";
import { useEffect, useState } from "react";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  const [activeStyles, setActiveStyles] = useState(
    "font-normal text-gray-600 dark:text-gray-400"
  );

  useEffect(
    () =>
      isActive
        ? setActiveStyles("font-semibold text-gray-800 dark:text-gray-200")
        : setActiveStyles("font-normal text-gray-600 dark:text-gray-400"),
    [isActive]
  );

  return (
    <Link
      className={cx(
        "rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2",
        activeStyles
      )}
      href={href}
    >
      {text}
    </Link>
  );
}

function Header({ changeLanguage, locale, locales, t }) {
  const { user, signOut, view } = useAuth();

  const linkKeys = Object.keys(links);

  return (
    <header className="flex items-center justify-between py-10 xl:px-4">
      <div className="flex items-center text-base leading-5">
        <div className="hidden md:block">
          {linkKeys.map((item, i) => (
            <NavItem
              key={links[item].path}
              href={links[item].path}
              text={t(`headerNavLinks:${links[item].label}`)}
            />
          ))}

          {user !== null && (
            <NavItem href={"/dashboard"} text={t(`headerNavLinks:dashboard`)} />
          )}
        </div>

        <MobileNav user={user} />
      </div>
      <div className="flex items-center gap-4">
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          style={{ textAlignLast: "center" }}
          // dark:  hover:ring-2 ring-gray-300  transition-all
          className="text-shadow-sm h-9 rounded-lg border-0 bg-gray-200 text-sm tracking-wide text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:text-gray-100"
        >
          {locales.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <ThemeSwitch />
        {user ? (
          <>
            <button
              aria-label="Logout Button"
              onClick={signOut}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
            >
              {logOut()}
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              aria-label="Login Button"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
            >
              {lockClosed()}
            </Link>
          </>
        )}
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
      <div className="flex h-screen flex-col justify-between">
        <Header
          changeLanguage={changeLanguage}
          locale={locale}
          locales={locales}
          t={t}
        />
        <main
          id="skip"
          className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900"
        >
          {children}
        </main>
        <FooterNew />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
