---
title: Basic Assets
subtitle: Halloween
---

Damit Webpack mit den Dateien umgehen kann, müssen wir hinterlegen, was Webpack mit dem Zeug anfangen soll. Dazu
hinterlegen wir im `webpack.config.js` die nötigen Infos im Bereich `module`.

```javascript
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

```javascript
import dummyImage from '../assets/img/dummy.png';

const img = document.createElement('img');
img.src = dummyImage;

document.body.appendChild(img);
```
