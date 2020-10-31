const path = require('path');
const CracoLessPlugin = require('craco-less');

// const serverProxy = [
//     'financial-shop-server',
//     'point-server',
//     'financial-shop-boot',
//     'game-mobile',
//     'game-ttkx-server',
// ];

let proxyObj = {};
'/financial-shop-server /point-server /financial-shop-boot /game-mobile /game-ttkx-server'
    .split(' ')
    .forEach((item) => {
        proxyObj[item] = {
            target: 'https://gdxdtest.moguyun.com',
            changeOrigin: true,
            pathRewrite: {
                [`^${item}`]: item,
            },
        };
    });
console.log(proxyObj);

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1890FF',
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
            containers: path.join(__dirname, '/src/containers'),
            less: path.join(__dirname, '/src/less'),
            api: path.join(__dirname, '/src/api'),
        },
    },
    devServer: {
        proxy: proxyObj,
    },
};
