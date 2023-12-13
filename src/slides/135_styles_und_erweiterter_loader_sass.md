---
title: Styles und erweiterter loader 2 (SASS)
subtitle: Getting sassy
---

```javascript
// webpack.config.js
// ...
export default {
    // ...
    module: {
        rules: [
            // Replaces previous CSS loader
            {
                test: /\.(s)?css/, // SCSS
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader', // SCSS loader
                    },
                ]
            },
            // ...
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
