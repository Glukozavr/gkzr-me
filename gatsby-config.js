require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `GKZR.me`,
    siteTitleAlt: `GKZR.me - Curious Games`,
    siteHeadline: `GKZR.me - Indie Game Development`,
    siteUrl: `https://gkzr.me`,
    siteDescription: `GKZR is an indie game developer that is not leading anything but tries to create curious games focusing on mobile devices.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@Glukozavr`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `GKZR.me`,
        location: `Ukraine`,
        socialMedia: [
            { title: `./home.png`, href: `./` },
            { title: `./twitter.png`, href: `https://twitter.com/glukozavr` }
        ]
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GKZR.me - Curious Games`,
        short_name: `GKZR.me`,
        description: `GKZR is an indie game developer that is not leading anything but tries to create curious games focusing on mobile devices.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#212d94`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
