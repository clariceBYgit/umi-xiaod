const { override, addDecoratorsLegacy } = require('customize-cra')
module.exports = override(
    addDecoratorsLegacy(
        [
            '@babel/plugin-proposal-decorators',
                  {
                    legacy:true
                  }
        ]
    )
)