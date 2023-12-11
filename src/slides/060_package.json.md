---
title: Das package.json
subtitle: Halloween
---

- Im `package.json` das Skript `build` mit dem Befehl `webpack` hinterlegen
- Im `package.json` noch den Schlüssel `type` mit dem Wert `module` hinterlegen damit wir imports in der Webpackconfig
  nutzen können

Das Skript `test` können wir löschen. Die Datei sollte nun in etwa so aussehen.

```json
{
  "name": "my-folder-or-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```
