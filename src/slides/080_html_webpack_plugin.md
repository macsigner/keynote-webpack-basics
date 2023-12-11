---
title: html-webpack-plugin
subtitle: Plug my Semantics
---

`npm i -D html-webpack-plugin`

```javascript
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: './src/js/main.js',
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};
```

_src/js/main.js_

```javascript
const title = document.createElement('h1');
title.innerHTML = 'Hail to the King!'

document.body.appendChild(title);
```
