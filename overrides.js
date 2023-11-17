const path = require('path');

module.exports = {
  overrides: [
    {
      test: /\.(js|jsx|mjs|ts|tsx)$/,
      resolve: {
        fullySpecified: false,
      },
    },
  ],
};
