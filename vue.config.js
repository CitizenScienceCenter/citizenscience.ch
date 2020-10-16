//var path = require('path');

/*
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// Renders headlessly in a downloaded version of Chromium through puppeteer
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;
*/
module.exports = {  
  chainWebpack: (config) => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
    },
    runtimeCompiler: true
  /*
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                //staticDir: __dirname+'/dist', // The path to the folder where __index.html is.
                staticDir: path.join(__dirname, 'dist'),
                routes: [
                    '/',
                    '/contribute','/contribute/projects','/contribute/collaborations',
                    '/start','/start/startproject','/start/offer','/start/checklist','/start/phases',
                    '/citizenscience','/citizenscience/zurichstyle','/citizenscience/sdg',
                    '/about','/about/mission','/about/people','/about/partnerships','/about/pwa','/about/contact',
                    '/events',
                    '/forum',
                    '/login',
                    '/register',
                    '/profile',
                    '/terms'
                ], // List of routes to prerender.
                renderer: new PuppeteerRenderer()
            })
        ]
    }
    */
};
