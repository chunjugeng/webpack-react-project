## 用webpack打包

### webpack打包 webpack-dev-server启动服务器 react库 react-router-dom路由 ejs模版 html-webpack-plugin处理html(webpack plugin) node-sass处理sass/scss

## 在webpack v4以后，使用webpack 需要安装webpack-cli, 这是因为 webpack 在 webpack 4 里将命令行相关的都迁移至 webpack-cli 包

## 处理js，需要安装babel-loader

## yargs可以处理package里的命令

## 解析jsx语法，需要安装 "babel-preset-react", "babel-preset-stage-0", 在.babelrc 文件里加react 和 stage-x

## 处理 sass|scss文件首先安装sass-loader node-sass,

### ------- webpack target: 'node', externals ------
## 主要就是在 webpack 的配置中加上 target: 'node' 告诉 webpack 打包的对象是 node 端的代码，这样一些原生模块webpack 就不会做处理。另一个就是 webpack 的 externals 属性，这个属性的主要作用就是告知 webpack 在打包过程中，遇到 externals 中声明的模块不用处理。
## 比如在前端中， jQuery 的包通过 CDN 的方式以 script 标签引入，如果此时在代码中出现 require('jQuery') ，并且直接用 webpack 打包比定会报错。因为在本地并没有这样的一个模块，此时就必须在 externals 中声明 jQuery 的存在。也就是externals 中的模块，虽然没有被打包，但是是代码运行是所要依赖的，而这些依赖是直接存在在整个代码运行环境中，并不用做特殊处理。
##在 node 端所要做的处理就是过滤出 node_modules 中所有模块，并且放到 externals中。   

### --------- webpack-node-externals -----------
### 这个插件的原理是利用了webapck中的externals配置项，来剔除node_modules文件的，因为默认webapck会把所有用到的js文件统统打包，而我们由于是在node端，因此不需要把用到的库也打包了。

### －－－－－－－－－－ 注意 target:'node' & webpack-node-externals都是减少打包压力的 －－－－－－－－－－－


### 在node环境不支持直接引入CSS文件的，如require('xx.css')，因此在打包的时候要忽略样式文件和资源文件，否则会报错, 需要安装babel-plugin-transform-require-ignore， 在webpack.server.config.js rules中设置
 
### React.Fragment是 React 中一个常见模式是为一个组件返回多个元素。 片段(fragments) 可以让你将子元素列表添加到一个分组中，并且不会在DOM中增加额外节点。 (http://www.css88.com/react/docs/fragments.html)

## axios 基本用法(参考文档： https://www.jianshu.com/p/b22d03dfe006)

## 在webpack-dev-server 下实现自动刷新， package.json webpack-dev-server -env develoment , nodemon 之后验证

## webpack.ProvidePlugin 全局定义要使用的一些文件库

### 手动链接React 和 Redux, 手动连接并不可取， 它有以下两个明显的缺点：
# 无法直接给里面的组件传递state和方法，
# 任意的state的变化都会导致整个组件数的重置渲染，没有优化性能 
# react-redux 就是专门为此设计的，它不仅可以给组件树中任一组件绑定state和方法，还可以进行性能优化，可以避免不必要的重新渲染。