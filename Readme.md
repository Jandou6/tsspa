# TSSPA

A SPA Web use [Typescript](http://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Webpack](http://webpack.github.io/)

You can also use cli to create view.

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
> Tip:
After create view. You can find the view component in `./src/routers`. If you want to use this view, you need to regist in router `./src/routers/index.tsx`.
## TODO
- [x] clean all the warnings
- [x] add prod/dev config
- [x] add react-loadable
- [x] add command to generate view template.
- [ ] build in CI.
- [ ] publish in npm.
- [ ] add e2e test.