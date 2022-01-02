const NoTranslation = ({ language }) => {
  return language === "pl" ? (
    <p>Niestety na ten moment nie posiadamy tłumaczenia dla tej strony.</p>
  ) : (
    <p>
      We're sorry, but we do not provide English translation for this page at
      the moment.
    </p>
  );
};

export default NoTranslation;
