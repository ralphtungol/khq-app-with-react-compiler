const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const deps = require("./package.json").dependencies;

const localhostUrl = `http://${process.env.CLIENT_CODE}.confighq.localhost:${process.env.PORT}/`;

module.exports = ({ webpackEnv }) => {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  return {
    output: {
      publicPath: isEnvProduction ? "auto" : isEnvDevelopment && localhostUrl,
      path: path.resolve(__dirname, "build"),
      clean: true,
    },

    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
      modules: ["node_modules", "src"],
    },

    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "eval-source-map",

    devServer: {
      port: `${process.env.PORT}`,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      hot: true,
      open: [localhostUrl],
      allowedHosts: "all",
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
          type: "asset/resource",
        },
        {
          exclude: [
            /\.(js|jsx|ts|tsx|mjs)$/,
            /\.html$/,
            /\.json$/,
            /\.scss$/,
            /\.css$/,
          ],
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "khq_app_with_react_compiler",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./App": "./src/bootstrap",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "kubra-ux-forge": {
            singleton: true,
            requiredVersion: deps["kubra-ux-forge"],
          },
          "kubra-ui-lib-mfe": {
            singleton: true,
            requiredVersion: deps["kubra-ui-lib-mfe"],
          },
          "kubra-ui-lib-auth": {
            singleton: true,
            requiredVersion: deps["kubra-ui-lib-auth"],
          },
          "styled-components": {
            singleton: true,
            requiredVersion: deps["styled-components"],
          },
        },
      }),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/kubra-ux-forge/dist/*.{woff,woff2}",
            to: "[name][ext]",
          },
        ],
      }),
      new Dotenv({ systemvars: true, silent: true }),
    ],
  };
};
