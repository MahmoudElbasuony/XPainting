var path = require("path");

module.exports = {
    entry: './main.ts',
    mode: 'development',
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    node: {
        __dirname: false,
        __filename: false,
    }
}