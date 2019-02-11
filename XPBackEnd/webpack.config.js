var path = require("path");

module.exports = {
    entry: './main.ts',
    mode: 'development',
    watch: true,
    target: 'node',
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /.(jpg|jpeg|png|svg|ttf|woff2|woff|eot)$/,
                use: ['file-loader'],
            }
        ]
    }
}