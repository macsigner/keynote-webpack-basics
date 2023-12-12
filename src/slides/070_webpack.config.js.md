---
title: Das webpack.config.js
subtitle: I enjoy your exports, Baby!
---

Gemäss dem Suffix eine gewöhnlich Javaskriptdatei.\
Beim Schlüssel `entry` den Pfad zur Javaskriptdatei hinterlegen.

```javascript
// webpack.config.js
export default {
    mode: 'development',
    entry: './src/js/main.js',
};
```

Mit dem Befehl `npm run build` können wir unsere Datei bereits kompilieren auch wenn nur ein (fast) leeres Javaskript
rauskommt.
