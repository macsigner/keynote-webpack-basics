---
title: Produktiveinstellung
subtitle: I like good confs and i cannot lie
---

- `npm i -D webpack-merge clean-webpack-plugin`
- `webpack.prod.js` anlegen

```javascript
// webpack.prod.js
import { merge } from 'webpack-merge';
import * as config from './webpack.config.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default merge(config, {
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
```

_package.json_

```json lines
{
  "scripts": {
    "start": "npx webpack serve",
    "build": "webpack",
    "build:prod": "webpack --config webpack.prod.js"
  },
}
```
