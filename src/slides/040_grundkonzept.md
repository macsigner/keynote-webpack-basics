---
title: Grundkonzept
subtitle: Plugin my Entry you dirty Loader!
---

```js
// webpack.config.js
// example
import WTFPlugin from 'wtf';

export default {
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.(wtf)$/,
                use: 'wtf-loader',
            },
        ],
    },
    plugins: [
        new WTFPlugin(),
    ],
};
```

- `entry`: _Einstiegsdatei in das Projekt_
- `loader`: _Behandlung der Datenstreams / Anpassung der Daten vor oder während dem Bundling_
- `plugins`: _Behandlung der Datenstreams / Anpassung der Daten (manchmal) nach dem Bundling oder zur Modifikation des
  Bundles_
