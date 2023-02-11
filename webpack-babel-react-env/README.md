build react environment using webpack & babel (without create-react-app)

1. mkdir webpack
2. cd webpack
3. mkdir webpack-babel-react-env
4. npm init & install all dependencies| webpack webpack-cli webpack-dev=server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
5. touch webpack.config.js .babelrc
6. add settings in webpack.config file & .babelrc file
7. add/install react|react react-dom @types/react-dom
8. mkdir src & touch src/index.js src/index.html src/App.jsx
9. index.html: add `<div id="root'></div>`
10. App.jsx: create a simple react component
11. index.js: import App.jsx & render it
12. npm run start
13. npm run build

14. add other loaders| css-loader style-loader sass-loader node-sass
    ローダーは JS ファイルにバンドルする為（JS の世界に持ち込むため）のローダー

15. try with npm i -D ts-loader ts-node typescript ...etc)
