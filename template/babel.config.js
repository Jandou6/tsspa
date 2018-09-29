const presets = [
  ["@babel/preset-env", {
    modules: false,
  }],
  ["@babel/preset-typescript", {
    isTSX: true,
    allExtensions: true,
  }],
  "@babel/preset-react",
];

module.exports = { 
  presets,
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
};