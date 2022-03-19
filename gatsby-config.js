require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cargem.eu`
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_KEY
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image'
  ]
}
