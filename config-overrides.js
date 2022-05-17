const { override, fixBabelImports, addLessLoader} = require('customize-cra')

module.export = override(
    //针对antd按需打包，根据import来打包,使用bable-plugin-import
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es6',
        style: true //自动打包相关的样式

    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {'@primary-color':'#1DA57A'}
    
    })
);