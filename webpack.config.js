const path = require('path');

module.exports = {
    entry: './src/main.tsx',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
      },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)(\?[^?]*)?$/,
                loaders: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, './build')
    }
};
