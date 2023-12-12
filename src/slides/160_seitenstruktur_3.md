---
title: Seitenstruktur 3
subtitle: Back to the :root
---

Im Beispiel an einem Array aber sonst vom Dateisystem auslesen.

```javascript
// webpack.config.js
// ...
import path from 'path';

const pages = [
    'src/pages/index.html',
    'src/pages/kopf.html',
    'src/pages/bauch.html',
    'src/pages/weh.html',
];

export default {
    // ..
    plugins: [
        ...pages.map(filePath => {
            const filename = filePath.replace(path.normalize('src/pages/'), '');
            return new HtmlWebpackPlugin({
                template: filePath,
                filename,
            });
        }),
        // ...
    ]
};
```
