const { override, fixBabelImports } = require('customize-cra')

module.export = override(
    //针对antd按需打包，根据import来打包,使用bable-plugin-import
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es6',
        style: 'css' //自动打包相关的样式

    })
);