---
title: Grundkonzept
subtitle: Plugin my Entry you dirty Loader!
---

- `entry`: _Einstiegsdatei in das Projekt_
- `loader`: _Behandlung der Datenstreams / Anpassung der Daten vor oder während dem Bundling_
- `plugins`: _Behandlung der Datenstreams / Anpassung der Daten (manchmal) nach dem Bundling oder zur Modifikation des
  Bundles_

```js
import WTFPlugin from 'wtf';

export default {
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.(wtf)$/,
                type: 'wtf-loader',
            },
        ],
    },
    plugins: [
        new WTFPlugin(),
    ],
};
```
