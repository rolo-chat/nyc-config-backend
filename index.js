"use strict";

module.exports = {
  all: true,
  "check-coverage": true,
  exclude: [
    "dist/**",
    "certs/**",
    "test/**",
    "coverage/**",
    "src/db/migrations/**",
    "env/**",
    "src/index.js",
  ],
  "skip-full": true,
  sourceMap: false,
  instrument: false,
  require: ["@babel/register"],
};
