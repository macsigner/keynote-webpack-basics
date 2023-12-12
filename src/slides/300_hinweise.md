---
title: Hinweise 1
subtitle: Schön war's
---

### Shorthand für die Loader

```javascript
{
  test: /\.css/,
  loader: 'style-loader!css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]'
}
```
