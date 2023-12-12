---
title: Styles und erweiterter loader 2 (webpack.config.js)
subtitle: Cascade Shitstorm
---

```javascript
// webpack.config.js
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
    mode: 'production',
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif)/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ]
};
```
