build react environment using webpack & babel (without create-react-app)

1. npm init & install all dependencies| webpack webpack-cli webpack-dev=server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
2. touch webpack.config.js .babelrc
3. add settings in webpack.config file & .babelrc file
4. add/install react|react react-dom @types/react-dom
5. mkdir src & touch src/index.js src/index.html src/App.jsx
6. index.html: add `<div id="root'></div>`
7. App.jsx: create a simple react component
8. index.js: import App.jsx & render it
9. npm run start
10. npm run build

11. add other loaders| css-loader style-loader sass-loader node-sass
    ローダーは JS ファイルにバンドルする為（JS の世界に持ち込むため）のローダー

12. try with npm i -D ts-loader ts-node typescript ...etc)
