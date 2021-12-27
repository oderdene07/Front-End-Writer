const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
  publicPath: "",
  configureWebpack: {
    plugins: [new GenerateSW()],
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  configureWebpack: {
    plugins: [new GenerateSW()],
  },
  pwa: {
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#42b983",
    },
  },
};
