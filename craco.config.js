const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            '@': path.join(__dirname, '/src'),
            pages: path.join(__dirname, '/src/pages'),
            components: path.join(__dirname, '/src/components'),
            router: path.join(__dirname, '/src/router'),
            configs: path.join(__dirname, '/src/configs'),
            store: path.join(__dirname, '/src/store'),
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://gdxdtest.moguyun.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
