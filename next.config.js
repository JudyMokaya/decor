// next.config.js
module.exports = {
    output: 'export',
    exportTrailingSlash: true,
    distDir: 'build',

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Modify the config as needed
        return config;
      },

    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Define other routes here
      };
    },
  };
  