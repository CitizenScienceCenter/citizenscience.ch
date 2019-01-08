var path = require('path');
// Add these
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// Renders headlessly in a downloaded version of Chromium through puppeteer
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@kazupon/vue-i18n-loader")
        .end();
  },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: __dirname, // The path to the folder where index.html is.
                routes: ['/', '/activities','/offer','/about'], // List of routes to prerender.
                renderer: new PuppeteerRenderer()
            })
        ]
    }
}
