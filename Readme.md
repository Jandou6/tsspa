# TSSPA 
[![Build Status](https://img.shields.io/travis/Jandou6/tsspa/master.svg)](https://travis-ci.org/Jandou6/tsspa/branches)
[![GitHub license](https://img.shields.io/github/license/jandou6/tsspa.svg)](https://github.com/nhnent/tui.calendar/blob/master/LICENSE)

TSSPA can generate  SPA Web in [Typescript](http://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Webpack](http://webpack.github.io/) 

[中文说明](https://github.com/Jandou6/tsspa/blob/master/docs/Readme-zh.md)

## How to use
1. get tsspa
```bash
npm install tsspa -g
```

2. generate you project such as:
```bash
tsspa -i my_project
```

3. you can see `my_project` had been created.Then you can:

    1. open the project that you created :
    ```bash
    open my_project
    ````

    2. use `yarn` or `npm` to install Dependencies.
    ```bash
    yarn install
    ````
    3. generate dll file
    ```bash
    yarn dll
    ``` 
    4. use webpack to start server for this project.
    ```bash
    yarn dev
    ```

## TODO
- [x] clean all the warnings
- [x] add prod/dev config
- [x] add react-loadable
- [x] add command to generate view template.
- [x] build in CI.
- [x] 中文 Readme
- [x] publish in npm.
- [ ] add e2e test.



## License
[MIT](https://github.com/Jandou6/tsspa/blob/master/LICENSE)

Copyright (c) 2018-present, Jandou