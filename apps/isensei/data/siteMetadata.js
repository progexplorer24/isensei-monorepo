const siteMetadata = {
  title: {
    en: "Isensei - Free spirit, philosopher, creator.",
    pl: "Isensei - Wolny duch, filozof, twórca.",
  },
  author: "Isensei",
  headerTitle: { en: "isensei", pl: "isensei" },
  description: { en: "Description in English", pl: "Opis strony" },
  language: "en-us",
  theme: "system",
  siteUrl: "https://isensei.pl",
  siteRepo: "https://github.com/progexplorer24",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "isensei.pl@gmail.com",
  github: "https://github.com/progexplorer24",
  twitter: "https://twitter.com/isensei_pl",
  facebook: "https://www.facebook.com/fundacja.isensei",
  locale: "en-US",
  analytics: {},
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: "",
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "", // supported providers: giscus, utterances, disqus
  },
};

module.exports = siteMetadata;
