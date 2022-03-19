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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cargem Serwis Naprawy Aut`,
        icon: `src/images/logo.svg`,
        short_name: `Cargem`,
        start_url: `/`,
        background_color: `#f3f3f3f3`,
        theme_color: `#f3f3f3`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/']
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    
  ]
}
