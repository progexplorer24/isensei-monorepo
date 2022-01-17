const NoTranslation = ({ language }) => {
  return language === "pl" ? (
    <p className="text-gray-600 dark:text-gray-400">
      Niestety na ten moment nie posiadamy tłumaczenia dla tej strony.
    </p>
  ) : (
    <p className="text-gray-600 dark:text-gray-400">
      We're sorry, but we do not provide English translation for this page at
      the moment.
    </p>
  );
};

export default NoTranslation;
