---
title: Basic Assets
subtitle: He said ass
---

Damit Webpack mit den Dateien umgehen kann, müssen wir hinterlegen was Webpack mit dem Zeug anfangen soll. Dazu
hinterlegen wir im `webpack.config.js` die nötigen Infos im Bereich `module`.

```javascript
// webpack.config.js
export default {
    mode: 'development',
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};
```
