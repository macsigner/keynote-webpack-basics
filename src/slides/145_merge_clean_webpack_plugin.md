---
title: Produktiveinstellung 2
subtitle: I like big confs and i cannot lie
---

_package.json_

```json lines
  "scripts": {
    "start": "npx webpack serve",
    "build": "webpack",
    "build:prod": "webpack --config webpack.prod.js"
  },
```

Der Befehl für den Produktivbuild lautet nun `npm run build:prod`.
