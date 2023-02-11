import path from "path";

module.exports = {
  mode: "development", //production
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /|.m?js|jsx|ts|tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // compatibility with older browsers
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
