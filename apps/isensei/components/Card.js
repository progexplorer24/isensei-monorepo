import Image from "./Image";
import Link from "./Link";

import useTranslation from "next-translate/useTranslation";

const Card = ({ title, description, imgSrc, href }) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: "544px" }}>
      <div
        className={`${
          imgSrc && "h-full"
        }  overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link showIcon={false} href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center lg:h-48 md:h-36"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link
                showIcon={false}
                href={href}
                aria-label={`Link to ${title}`}
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
            {description}
          </p>
          {href && (
            <Link
              href={href}
              showIcon={false}
              className="text-base font-medium leading-6 text-sky-700 hover:text-sky-500 dark:text-primary-500 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              {t("projects:learn")} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
