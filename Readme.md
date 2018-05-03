# TSSPA

A SPA Web use [Typescript](http://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Webpack](http://webpack.github.io/)

## Dev
1. get the code
```git
git clone git@github.com:Jandou6/tsspa.git
```
2. install dependencies
```bash
yarn install
```
3. genrate dll filename
```bash
yarn dll
```

4. start webpack dev server
```bash
yarn start
```

## Prod
1. generate build files
```bash
yarn build
```
2. start a express prod server
```bash
yarn start:prod
```

## CLI
you can use CLI to create view.
```
yarn cli -v
```
## TODO
- [x] clean all the warnings
- [x] add prod/dev config
- [x] add react-loadable
- [x] add command to generate view template.