---
title: Basic Assets 2
subtitle: Romance
---

Im Ordner `src/assets/img` ein PNG mit dem Namen _dummy.png_ hinzufügen.

```javascript
// src/js/main.js
import dummyImage from '../assets/img/dummy.png';

const img = document.createElement('img');
img.src = dummyImage;

document.body.appendChild(img);
```
