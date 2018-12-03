const path = require('path');

module.exports = {
    entry: './src/main.tsx',

    devtool: "source-map",

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'mapbox-gl': '../node_modules/mapbox-gl/dist/mapbox-gl.js'
          }
      },
    module: {
        rules: [
            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader" ,
                include:  path.resolve(__dirname, 'src'),
                test: /\.(ts|tsx)(\?[^?]*)?$/,
                loader: "awesome-typescript-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, './build')
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
