import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import replace from "rollup-plugin-replace";
import url from "@rollup/plugin-url";
import size from "rollup-plugin-size";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import postcssurl from "postcss-url";

const plugins = [
  external(),
  replace({
    "process.env.NODE_ENV": JSON.stringify("[production]"),
  }),
  resolve(),
  json(),
  url({
    include: ["**/*.ttf", "**/*.png"],
    limit: Infinity,
    fileName: "[dirname][name][extname]",
  }),
  postcss({
    plugins: [
      postcssurl({
        url: "inline",
      }),
    ],
    minimize: true,
  }),
  commonjs({
    include: /node_modules/,
  }),
  svgr({ babel: false }),
  babel({
    babelHelpers: "runtime",
    exclude: "node_modules/**",
    presets: ["@babel/preset-env", "@babel/preset-react"],

    plugins: ["@babel/plugin-transform-runtime"],
  }),
  terser({ compress: { drop_console: true, evaluate: false } }),
  size(),
];

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "index.js",
        format: "cjs",
        sourcemap: false,
      },
    ],
    context: "window",
    external: [/@babel\/runtime/],
    plugins,
  },
  {
    input: "./src/lib/icons/index.js",
    output: [
      {
        file: "icons.js",
        format: "cjs",
        sourcemap: false,
      },
    ],
    external: [/@babel\/runtime/],
    plugins,
  },
  {
    input: "./src/lib/hooks/index.js",
    output: [
      {
        file: "hooks.js",
        format: "cjs",
        sourcemap: false,
      },
    ],
    context: "window",
    external: [/@babel\/runtime/],
    plugins,
  },
];
