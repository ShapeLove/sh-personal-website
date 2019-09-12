const webpack = require('webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
    //部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '/online/' : './',
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'assets',
    // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
    lintOnSave: true,
    //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
    productionSourceMap: true,
    
    //允许我们更细粒度的控制 webpack 的内部配置,例如：以下操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M
    // chainWebpack: config => {
    //     config.module.rule("images")
    //     .use("url-loader")
    //     .tap(options =>
    //     merge(options, {
    //     limit: 5120
    // }));
    // },
    //可以在正式环境下关闭错误报告 console.log...
    configureWebpack: config => { 
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return;
        } else {
            // 为开发环境修改配置...
            return {
              plugins: [
                new PrerenderSPAPlugin({
                  // 生成文件的路径，也可以与webpakc打包的一致。
                  // 下面这句话非常重要！！！
                  // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                  staticDir: path.join(__dirname, 'dist'),
          
                  // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                  routes: ['/', '/Login', '/Home'],
          
                  // 这个很重要，如果没有配置这段，也不会进行预编译
                  renderer: new Renderer({
                    inject: {
                      foo: 'bar'
                    },
                    headless: false,
                    // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                    renderAfterDocumentEvent: 'render-event'
                  })
                })
              ]
            };
        }
    },
    // configureWebpack: () => {
    //   if (process.env.NODE_ENV !== 'production') return;
      
    // },
  
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8085, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地                                        
            target: 'http://192.168.102.13:8080/',
            // 如果要代理 websockets
            ws: true,
            changeOrigin: true
      },
      '/test': { //测试
        target: 'http://172.22.0.58:8082/'
      },
      '/pre-release': {  //预发布
        target: 'http://XXX.com/'
      },
      '/production': { //正式
        target: 'http://XXX.com/'
      }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    }
}
console.log(process.env.NODE_ENV); // development（在终端输出）