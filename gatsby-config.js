module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data from WordPress`,
    description: `Sourcing data from WordPress`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://alltvapps.com/graphql`,
        baseUrl: `alltvapps.com`,
      },
    },
    `gatsby-plugin-sharp`,
  ],
}
