const environment = require('./environment')

module.exports = environment.toWebpackConfig()

module.exports = {
    // configuration
loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules\/(?!(@angular\/common\/src\/facade\/.+))/,
            loader: 'babel?presets[]=es2015'
        }
    ]
};
