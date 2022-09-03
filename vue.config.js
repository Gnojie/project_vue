// vue脚手架项目 -默认的配置文件名 vue.config.js
// webpack+node环境 -导出默认配置对象 
module.exports = {
    devServer: { // 自定义服务配置
      open: true, // 自动打开浏览器
      port: 3000
    },
    lintOnSave: false //关闭eslint检查
  }