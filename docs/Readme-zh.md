# TSSPA [![Build Status](https://img.shields.io/travis/Jandou6/tsspa/master.svg)](https://travis-ci.org/Jandou6/tsspa/branches)

基于 [Typescript](http://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Webpack](http://webpack.github.io/) 的单页面

你可以使用CLI创造视图页面

## 开发
1. 获取代码
```git
git clone git@github.com:Jandou6/tsspa.git
```
2. 安装依赖
```bash
yarn install
```
3. 生成dll文件（提高开发编译速度）
```bash
yarn dll
```

4. 使用webpack开启服务器。
```bash
yarn start
```

## 生产环境
1. 编译生成文件
```bash
yarn build
```
2. 使用express启动node服务器
```bash
yarn start:prod
```

## CLI
你可以使用以下命令工程化地构建页面。
```
yarn cli -v
```
> 温情提示:
使用命令创建文件后。你可以在`./src/routers`里面找到刚才创建的文件。 如果你要使用该页面的话，你必须要在路由器`./src/routers/index.tsx`里面注册你的页面。

## License
[MIT](https://github.com/Jandou6/tsspa/blob/master/LICENSE)

Copyright (c) 2018-present, Jandou