import path from "path";
import webpack from "webpack";

const config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("bin"),
    filename: "create-crayon.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
  },
  externals: ["child_process"],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
    }),
  ],
};

export default config;
