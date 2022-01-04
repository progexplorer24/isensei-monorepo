import { useRef, useState } from "react";

import siteMetadata from "@/data/siteMetadata";
import useTranslation from "next-translate/useTranslation";

const NewsletterForm = ({ title = "Subscribe to the newsletter" }) => {
  const inputEl = useRef(null);
  const [error, setError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useTranslation();

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setError(true);
      return;
    }

    inputEl.current.value = "";
    setError(false);
    setSubscribed(true);
  };

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            {t("newsletter:mail")}
          </label>
          <input
            autoComplete="email"
            className="px-4 rounded-md w-72 bg-gray-200 placeholder-gray-800 dark:placeholder-gray-400  place dark:bg-gray-800 focus:outline-none focus:ring-2 border-transparent focus:border-transparent focus:ring-gray-300"
            id="email-input"
            name="email"
            placeholder={
              subscribed
                ? t("newsletter:placeholderSucces")
                : t("newsletter:placeholderDefault")
            }
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`py-2 sm:py-0 w-full bg-sky-700 hover:bg-sky-500 dark:bg-primary-700 dark:hover:bg-primary-500 px-4 rounded-md font-medium text-white ${
              subscribed ? "cursor-default" : ""
            } focus:outline-none focus:ring-2  focus:ring-gray-300`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed
              ? t("newsletter:buttonSuccess")
              : t("newsletter:buttonDefault")}
          </button>
        </div>
      </form>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">
          {t("newsletter:messageError")}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
);
