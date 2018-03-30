const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);

    config.resolve.extensions = [".js", ".jsx", ".json"],
    config.resolve.alias = {
        'src': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'actions': resolve('src/actions'),
        'router': resolve('src/router'),
        'reducers': resolve('src/reducers'),
        'utils': resolve('src/utils'),
        'store': resolve('src/store'),
        'connect': resolve('src/utils/connect')
    }
    return config;
};
