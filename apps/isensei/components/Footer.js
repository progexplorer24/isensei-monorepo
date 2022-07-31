import useTranslation from "next-translate/useTranslation";

import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";
import Emoji from "@/components/Emoji";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mx-auto mb-8 mt-16 w-full max-w-2xl">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />

      <div className="grid w-full max-w-2xl grid-cols-2 gap-y-16 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:home")}
          </Link>
          <Link
            href="/about"
            className="text-gray-700 transition hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:about")}
          </Link>

          <Link
            href="/mission"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:mission")}
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href={siteMetadata.twitter}>Twitter</ExternalLink>
          <ExternalLink href={siteMetadata.github}>GitHub</ExternalLink>
          <ExternalLink href={siteMetadata.facebook}>Facebook</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/tags"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:tags")}
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:projects")}
          </Link>
          <Link
            href="/snippets"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:snippets")}
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/privacy-policy"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:privacy-policy")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:contact")}
          </Link>
          <Link
            href="/statute"
            className="text-gray-700 transition dark:text-gray-400 hover:dark:text-gray-300"
          >
            {t("footerLinks:statute")}
          </Link>
        </div>
      </div>

      <div className="sm:flex sm:flex-col sm:items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-6 grid grid-cols-2 gap-y-6 gap-x-4 text-sm text-gray-500 dark:text-gray-400 sm:flex sm:space-x-2">
          <div>isensei.pl@gmail.com</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>515-009-644</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>Września</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>Daszyńskiego 2D/37</div>
        </div>
        <div className="mt-0 mb-16 grid grid-cols-2 gap-x-4 gap-y-6 text-sm text-gray-500 dark:text-gray-400 sm:flex sm:space-x-2">
          <Link href="https://www.facebook.com/myway.angielski.matematyka">
            {t("footerLinks:foundation")}
          </Link>
          <div className="hidden sm:block">{` • `}</div>
          <div>{t("footerLinks:creator")}</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
