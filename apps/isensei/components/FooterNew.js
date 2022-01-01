import Link from "@/components/Link";

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
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 mt-16">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              About
            </a>
          </Link>
          <Link href="/mission">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Mission
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/tags">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Tags
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Projects
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Snippets
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/tags">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Tags
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Projects
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition">
              Snippets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
