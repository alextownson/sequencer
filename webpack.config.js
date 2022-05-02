// This resource helped me set up webpack: https://www.youtube.com/watch?v=5IG4UmULyoA&t=177s&ab_channel=Fireship
// This resource helped me set up React from scratch: https://www.youtube.com/watch?v=WDpxqopXd9U&ab_channel=JuniorDeveloperCentral

// node.js utility path
const path = require('path');

// including an extract css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This file is a JS module that exports an object that customizes the behaviour of webpack.

module.exports = {

    // Entry attribute points to your application. This can be an object to point to more than one entry; code splitting.
    entry: './src/index.js',

    // output attribute to name the file and path we want to output our compiled JS to. 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/')
    },

    // Development server to have live updating of the application.
    devServer: {
            static: path.join(__dirname, 'dist/'),
            historyApiFallback: true,
            compress: true,
            port: 9000,
    },

    // Setup various rules to handle certain files
    module: {
        rules: [
            {
                // What type of files to match ex. js and jsx
                test: /\.(js|jsx)$/,
                // don't look for files in node modules
                exclude: /node_modules/,
                // Load that into webpack using babel loader 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // Look for sass files
                test: /\.(css|scss)$/,
                // Load those files using:
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }, 
            // creating a loader to handle my assets
            {
                // looking for these file types
                test: /\.(png|jpe?g|gif)$/,

                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]',
                    }
                },
            },
        ]
    },

    plugins: [new MiniCssExtractPlugin()],
};