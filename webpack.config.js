module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "pipe.js",
        library: "scr-pipe",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js"]
    }
};
