import useTranslation from "next-translate/useTranslation";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="h-content sm:h-content-sm flex w-full flex-col justify-around">
      <h1 className="my-28 select-none text-center text-6xl font-extrabold leading-none tracking-tightest sm:my-10 sm:text-8.5xl">
        <span
          data-content={t("hero:foundation")}
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
            {t("hero:foundation")}
          </span>
        </span>
        <span
          data-content={t("hero:portfolio")}
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
            {t("hero:portfolio")}
          </span>
        </span>
        <span
          data-content={t("hero:blog")}
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
            {t("hero:blog")}
          </span>
        </span>
      </h1>
    </div>
  );
}
