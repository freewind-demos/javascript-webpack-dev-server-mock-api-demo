Webpack-dev-server Mock Api Demo
=======================

可以直接在webpack-dev-server中使用其提供的express对象来定义route，返回一个mock的api。

在webpack.config.js中`devServer`里配置。

```
npm install
npm run demo
```

然后访问：

```
http://localhost:???/hello/webpack
```

将得到: 

```
{"hello":"webpack"}
```
