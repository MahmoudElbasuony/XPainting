var path = require("path");

module.exports = {
    entry: './main.ts',
    mode: 'development',
    watch: true,
    target : 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
}