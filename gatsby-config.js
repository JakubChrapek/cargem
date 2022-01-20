require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_KEY
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image'
  ]
}
