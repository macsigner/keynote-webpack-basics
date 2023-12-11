---
title: Seitenstruktur 3
subtitle: Back to the :root
---

Im Beispiel an einem Array aber sonst vom Dateisystem auslesen.

```javascript
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const pages = [
    'src/pages/index.html',
    'src/pages/kopf.html',
    'src/pages/bauch.html',
    'src/pages/weh.html',
];

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
        ...pages.map(filePath => {
            const filename = filePath.replace(path.normalize('src/pages/'), '');
            return new HtmlWebpackPlugin({
                template: filePath,
                filename,
            });
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ]
};

```
