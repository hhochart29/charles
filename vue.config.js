/* Used for tweaking the building script */
/* Build in a docs folder for the gh-page :) */
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './' // prod
    : '/', // dev
  outputDir: 'docs',
  productionSourceMap: false
}
