---
title: module.export vs export default
subtitle: because we can
---

### Pöbel

```js
const stuff = require('stuff');
module.exports = {
    ...
};
```

### wir

```js
import stuff from 'stuff';
export default {
    ...
};
```

### package.json

```json
{
    "name": "Awesome stuff",
    "version": "0.0.1",
    "type": "module"
}
```
