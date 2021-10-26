module.exports = {
  siteMetadata: {
    title: `Compound Composer`,
    siteUrl: `https://www.compound-composer.com`,
    description: `Calculate your savings over time with the beautiful power of compound interests.`,
    author: `@alramalho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Compound Composer`,
        short_name: `Compound Composer`,
        start_url: `/`,
        background_color: `#ececee`,
        theme_color: `#22323f`,
        display: `minimal-ui`,
        icon: `src/images/me.png`,
      },
    },
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
