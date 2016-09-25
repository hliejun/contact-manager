var path = require('path');

module.exports = {
    entry: ["./app"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: path.join(__dirname, ''), loader: 'babel-loader' },
            { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']} },
            { test: /\.(woff|woff2|eot|ttf|gif|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.css/, loader: "style-loader!css-loader" },
            { test: /\.js/, loader: "babel-loader" },
            { test: /\.html$/, loader: "html?config=otherHtmlLoaderConfig" },
            { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    "resolve": {
        "alias": {
            "Long": "long",
            "ByteBuffer": "bytebuffer"
        }
    }
};
