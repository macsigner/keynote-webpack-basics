---
title: Styles und erweiterter loader 2 (SASS)
subtitle: Cascade Shitstorm
---

```javascript
// webpack.config.js
// ...
export default {
    // ...
    module: {
        rules: [
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

```javascript
// src/js/main.js
import '../sass/main.scss'; // Import sass in your javascript
```
