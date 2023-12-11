---
title: Styles und erweiterter loader (SASS)
subtitle: Cascade Shitstorm
---

`npm i -D sass sass-loader`

```javascript
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
    mode: 'production',
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.(s)?css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
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

```javascript
import '../sass/main.scss'; // Import sass in your javascript
```
