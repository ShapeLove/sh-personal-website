# vue3-config-prerender-template
- 基于vue-cli3  
- 使用技术栈：vue+typescript+scss+yarn+vue-router  
- 本项目只是一个基本的架子，可以在此基础上进行开发，目前实现了vue.config.js的自定义配置，可yarn run build 打包生成可执行的dist文件  
- 支持预渲染
## 目录结构
```html
   .
   ├── ReadMe.md                 
   ├── dist                       run build打包后生成的dist目录（当前已经实现预渲染）
   │   ├── assets                 css/img静态资源文件
   │   ├── index.html
   ├── public                     存放向外的index.html模板
   │   └── index.js
   ├── src                        组件gulp打包程序
   │    ├── assets                静态资源文件（scss/img文件）
   │    ├── components            存放组件
   │    ├── views                 存放页面文件
   │    ├── App.vue               入口页面
   │    ├── main.ts               入口文件
   │    ├── router.ts             路由
   │    ├── shims-tsx.d.ts        
   │    └── shims-tsx.d.ts						
   ├── .env.pre-release           环境配置
   ├── .env.production            生产环境配置
   ├── .env.test                  测试环境配置
   ├── babel.config.js            解析配置文件
   ├── tsconfig.json              ts配置文件
   ├── tslint.json                ts语法分析配置文件
   ├── vue.config.js              自定义的vue配置文件
   ├── yarn.lock
   ├── package.json
   └── packages                 

   ```

## Project setup
```
yarn add 
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
