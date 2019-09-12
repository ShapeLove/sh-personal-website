# vue3-config-prerender-template
## 目录结构
```html
   .
   ├── ReadMe.md
   ├── dist										run build打包后生成的dist目录（当前已经实现预渲染）
   │   ├── assets                               css/img静态资源文件
   │   ├── index.html
   ├── public								    存放向外的index.html模板
   │   └── index.js
   ├── src					                    组件gulp打包程序
   │    ├── assets								静态资源文件（scss/img文件）
   │    ├── components						    存放组件
   │    ├── views								存放页面文件
   │    ├── App.vue								入口页面
   │    ├── main.ts								路由
   │    ├── router.ts							入口资源文件
   │    ├── main.ts								入口资源文件
   │    └── shims-tsx.d.ts						
   ├── .env.pre-release					        环境配置
   ├── .env.production					        生产环境配置
   ├── .env.test					            测试环境配置
   ├── babel.config.js					        解析配置文件
   ├── tsconfig.json					        ts配置文件
   ├── tslint.json					            ts语法分析配置文件
   ├── vue.config.js					        自定义的vue配置文件
   ├── yarn.lock
   ├── package.json
   └── packages									组件库
       ├── button									button组件
       ├── common								    组件公共样式与方法
       └── wxs									小程序wxs语法公共库
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
