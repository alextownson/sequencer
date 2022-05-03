// These resources really helped me: 
// https://www.youtube.com/watch?v=5IG4UmULyoA&t=177s&ab_channel=Fireship
// https://www.youtube.com/watch?v=WDpxqopXd9U&ab_channel=JuniorDeveloperCentral
// https://www.youtube.com/watch?v=TOb1c39m64A&ab_channel=SwashbucklingwithCode


// including an extract css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// including path from node.js
const path = require('path');

// This file is a JS module that exports an object which customizes the behaviour of webpack.

module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext][query]'
    },

    // Setup various rules to handle certain files
    module: {
        rules: [
            
            {
                // What type of files to match ex. js and jsx
                test: /\.(js|jsx)$/i,
                // don't look for files in node modules
                exclude: /node_modules/,
                // Load that into webpack using babel loader 
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                // look for
                test: /\.html$/i,
                // Load that into webpack using file loader 
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext][query]'
                }
            },

            {
                // Look for css files
                test: /\.css$/i,
                // Load those files using:
                use: [
                    {
                       loader: MiniCssExtractPlugin.loader,
                       options: { publicPath: "" },
                    },
                    'css-loader'
                ],
            }, 

            // creating a loader to handle my assets
            {
                // looking for these file types
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: 'source-map',    
    // Development server to have live updating of the application.
    devServer: {
            static:'./dist',
            hot: true,
    },
};