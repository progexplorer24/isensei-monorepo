import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";
import { useRouter } from "next/router";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer className="max-w-2xl mx-auto w-full mb-8 mt-16">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            About
          </Link>

          <Link
            href="/mission"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Mission
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
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Tags
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Projects
          </Link>
          <Link
            href="/snippets"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Snippets
          </Link>
        </div>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/privacy-policy"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Cookie Notice
          </Link>
          <Link
            href="/terms-of-use"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Terms of use
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex mb-3 space-x-4">
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
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>isensei.pl@gmail.com</div>
          <div>{` • `}</div>
          <div>Września</div>
          <div>{` • `}</div>
          <div>Daszyńskiego 2D/37</div>
          <div>{` • `}</div>
          <div>123-456-789</div>
        </div>
        <div className="flex mb-10 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Made by {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="https://www.facebook.com/myway.angielski.matematyka">
            isensei Foundation
          </Link>
        </div>
      </div>
    </footer>
  );
}
