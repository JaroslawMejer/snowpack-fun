/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      // directory name: 'build directory'
      public: '/',
      src: '/dist',
  },
  plugins: [
      "@snowpack/plugin-sass",
      '@snowpack/plugin-react-refresh',
      '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    jsxInject: "import React from 'react'"
  },
};
