//redundant with the webapck settings?
//this is here just for testing
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
