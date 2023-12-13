---
title: Produktiveinstellung 1
subtitle: I like big confs and i cannot lie
---

- `npm i -D webpack-merge clean-webpack-plugin`
- `webpack.prod.js` anlegen

```javascript
// webpack.prod.js
import { merge } from 'webpack-merge';
import * as config from './webpack.config.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default merge(config.default, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
```
