const { override, fixBabelImports,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const path = require("path");
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        "@":path.join(__dirname,"./src"),
    }),
    addDecoratorsLegacy()
);