const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
  siteMetadata: {
    name: 'Rumi',
    title: 'Rumi Saffron, Dried Fruits & Nuts Company',
    description:
      'Rumi Saffron, Dried Fruits & Nuts Company is registered with ACBR (Afghanistan Central Business Registry) of the ministry of commerce & industries of Afghanistan, a member of Afghanistan Chamber of Commerce & Industries, Women Chamber of Commerce & Industries, and Afghanistan Exporters Club operate as Afghanistan’s leading export company in Saffron, Dried Fruits and Nuts industries.',
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
    copyrights:
      'Copyright 2017-2020 - Rumi Saffron, Dried Fruits & Nuts Company',
  },
}
