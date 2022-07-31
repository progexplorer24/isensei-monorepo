import { useState } from "react";
import Link from "./Link";
import links from "@/data/links";

import useTranslation from "next-translate/useTranslation";

function MenuIcon(props) {
  return (
    <svg
      className="stroke-gray-300 dark:stroke-gray-500"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="stroke-gray-300 dark:stroke-gray-500"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const MobileNav = () => {
  const { t } = useTranslation();
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  const textArr = ["home", "blog", "tags", "projects"];

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {navShow ? <CrossIcon /> : <MenuIcon />}
      </button>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full transform bg-gray-50 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-0 flex h-full w-full flex-col">
          {[links.home, links.blog, links.tags, links.projects].map(
            (item, i) => (
              <div
                key={i}
                className="w-full border-b border-gray-200 text-sm font-bold text-gray-900 dark:border-gray-700 dark:text-gray-100 "
              >
                <Link
                  href={item}
                  className="block py-4 text-center"
                  onClick={onToggleNav}
                >
                  {t(`headerNavLinks:${textArr[i]}`)}
                </Link>
              </div>
            )
          )}
          {/* <Link
              href={links.home}
              className="block text-center py-4"
              onClick={onToggleNav}
            >
              {t("headerNavLinks:home")}
            </Link>
          </div>
          <div className="border-b w-full border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-bold ">
            <Link
              href={links.blog}
              className="block text-center py-4"
              onClick={onToggleNav}
            >
              {t("headerNavLinks:blog")}
            </Link>
          </div>
          <div className="border-b w-full border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-bold ">
            <Link
              href={links.tags}
              className="block text-center py-4"
              onClick={onToggleNav}
            >
              {t("headerNavLinks:tags")}
            </Link>
          </div>
          <div className="border-b w-full border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-bold ">
            <Link
              href={links.projects}
              className="block text-center py-4"
              onClick={onToggleNav}
            >
              {t("headerNavLinks:projects")}
            </Link>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
