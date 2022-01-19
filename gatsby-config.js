module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "4b9fbae794cfe6a0725ef9551384d1"
    }
  }, "gatsby-plugin-styled-components"]
};