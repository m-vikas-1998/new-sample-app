// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')([
//   '@custom/shared',
//   '@custom/basic-call',
//   '@custom/text-chat',
//   '@custom/live-streaming',
//   '@custom/recording',
// ]);

// const packageJson = require('./package.json');

// module.exports = withPlugins([withTM], {
//   env: {
//     PROJECT_TITLE: packageJson.description,
//   },
// });
// next.config.js

// next.config.js

// next.config.js

module.exports = {
  // env: {
  //   DAILY_API_KEY: process.env.DAILY_API_KEY,
  //   DAILY_DOMAIN: process.env.DAILY_DOMAIN
  // },

  reactStrictMode: true,

  // Enable CSS support (CSS Modules enabled by default for `.module.css` files)
  css: {
    // Optional: you can enable CSS Modules for all stylesheets ending in `.module.css`
    modules: true,
  },

  // Enable Sass support
  sassOptions: {
    // You can customize Sass options here
  },

  // If you need to transpile specific packages
  transpilePackages: ['your-custom-module'], // List packages that need to be transpiled

  // Watch options for Webpack during development
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,  // Ignore node_modules during watch
      };
    }

    return config;
  },
};
