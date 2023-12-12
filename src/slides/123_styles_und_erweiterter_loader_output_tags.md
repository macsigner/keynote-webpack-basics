---
title: Styles und erweiterter loader - Dateinamen 2
subtitle: Cascade Shitstorm
---

```javascript
// webpack.config.js
export default {
    // ...
    output: {
        //...
        chunkFilename: '[id].js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]',
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash].css',
        })
    ]
};
```
