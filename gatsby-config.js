require('dotenv').config()

module.exports = {
  siteMetadata: {
    name: 'RumiLLC',
    title: 'Rumi Saffron, Dried Fruits & Nuts Company',
    siteUrl: 'https://rumillc.com',
    description:
      'Rumi Saffron, Dried Fruits & Nuts Company is registered with ACBR (Afghanistan Central Business Registry) of the ministry of commerce & industries of Afghanistan, a member of Afghanistan Chamber of Commerce & Industries, Women Chamber of Commerce & Industries, and Afghanistan Exporters Club operate as Afghanistan’s leading export company in Saffron, Dried Fruits and Nuts industries.',
    logoUrl: 'static/logo.png',
    address: 'Qalai Amir, Qargha Lake Area, Kabul.',
    contacts: {
      phone: '+93 (0) 784516129',
      whatsapp: '+93 (0) 784516129',
      email: 'info@rumillc.com',
    },
    social: {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      instagram: 'https://www.instagram.com',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: '56ui7hp0ualt',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': 'rgb(135, 84, 0)',
            '@link-color': 'rgb(135, 84, 0)',
            '@font-size-base': '18px',
            '@font-family': 'Work Sans',
          },
        },
      },
    },
    'gatsby-plugin-minify-classnames',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rumi Saffron, Dried Fruits & Nuts Company',
        short_name: 'RumiLLC',
        start_url: '/',
        background_color: '#d8a550',
        theme_color: '#875400',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
