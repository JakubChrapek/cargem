module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "db83045860a0335b5cfbed09f8cb7d"
    }
  }, "gatsby-plugin-styled-components"]
};