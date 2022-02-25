module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          // TODO: figure out a better target that closely matches Rhino
          ie: '10',
          node: 'current'
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript'
  ],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties']
  ],
};