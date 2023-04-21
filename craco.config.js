const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          "@utils": "./src/Utilities/index.js",
          "@pages": "./src/Pages/index.js",
          "@common": "./src/Pages/common.js"
        },
      },
    },
  ],
}