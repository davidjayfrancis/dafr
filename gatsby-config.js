/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `David Francis`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `essays`,
        path: `${__dirname}/essays`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-remark-images",
  ],
};
