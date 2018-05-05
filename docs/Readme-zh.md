# TSSPA
[![Build Status](https://img.shields.io/travis/Jandou6/tsspa/master.svg)](https://travis-ci.org/Jandou6/tsspa/branches)
[![GitHub license](https://img.shields.io/github/license/jandou6/tsspa.svg)](https://github.com/nhnent/tui.calendar/blob/master/LICENSE)

TSSPA 是一个创建 基于 [Typescript](http://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Webpack](http://webpack.github.io/) 单页面的脚手架工具。

## 怎么使用
1. 获取 tsspa
```bash
npm install tsspa -g
```

2. 生成你的项目，例如：
```bash
tsspa -i my_project
```

3. 你能找到刚才建的项目 `my_project` .然后你可以:

    1. 打开你的项目 :
    ```bash
    open my_project
    ````

    2. 使用 `yarn` 或者 `npm` 去安装依赖文件
    ```bash
    yarn install
    ````
    3. 生成 dll 文件（为了更快速编译）
    ```bash
    yarn dll
    ``` 
    4. 使用webpack开启服务
    ```bash
    yarn dev
    ```

## License
[MIT](https://github.com/Jandou6/tsspa/blob/master/LICENSE)

Copyright (c) 2018-present, Jandou