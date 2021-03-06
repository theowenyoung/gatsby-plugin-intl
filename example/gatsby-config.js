module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    author: "Owen",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ko`, `de`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
  ],
}
