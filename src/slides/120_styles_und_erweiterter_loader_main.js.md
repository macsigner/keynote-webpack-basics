---
title: Styles und erweiterter loader (main.js)
subtitle: Are you supposed to put it inside there?
---

```javascript
import '../sass/main.css'; // Import CSS in your javascript

const title = document.createElement('h1');
title.innerHTML = 'Hail to the King!'

document.body.appendChild(title);

import dummyImage from '../assets/img/dummy.png';

const img = document.createElement('img');
img.src = dummyImage;

document.body.appendChild(img);
```
