/* eslint-disable */
const path = require('path');

const joinResolver = (_path) => path.join(path.resolve(__dirname, _path));

module.exports = {
    webpack: {
        alias: {
            '@app': joinResolver('./src'),
            '@components': joinResolver('./src/components'),
            '@game': joinResolver('./src/game'),
            '@hooks': joinResolver('./src/hooks'),
            '@helpers': joinResolver('./src/helpers'),
            '@styles': joinResolver('./src/styles'),
        },
    },
};
