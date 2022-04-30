// This resource helped me set up webpack: https://www.youtube.com/watch?v=5IG4UmULyoA&t=177s&ab_channel=Fireship

// node.js utility path
const path = require('path');

// This file is a JS module that exports an object that customizes the behaviour of webpack.

module.exports = {

    // Entry attribute points to your application. This can be an object to point to more than one entry; code splitting.
    entry: './src/main.js',

    // output attribute to name the file and path we want to output our compiled JS to. 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },

    // Enables development built-in optimizations. Other mode option is production. 
    mode: 'development',
};