module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
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