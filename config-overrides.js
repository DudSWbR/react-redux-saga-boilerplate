const { addBabelPlugin, override } = require('customize-cra');
const { merge } = require('webpack-merge');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  (config, env) => {
    if (process.env.NODE_ENV === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }
    config = rewireReactHotLoader(config, env);
    config.module.rules[0].parser.requireEnsure = true;
    config.module.rules[0].parser.requireEnsure = true;
    return merge(config, {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 100,
          chunks: 'all',
          minSize: 200000,
          maxSize: 300000,
          maxInitialRequests: 10,
          maxAsyncRequests: 10,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace('@', '')}`;
              },
            },
          },
        },
      },
    });
  }
);
