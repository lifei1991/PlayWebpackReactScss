var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),

        new webpack.ProvidePlugin({
            $: "webpack-zepto"
        })
    ],

    entry:[
         './app/js/Entry.js'
    ],

    output: {
        path: './public/javascripts/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.scss']
    },

    watch: true
};
