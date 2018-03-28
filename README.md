### import-generator [![npm](http://img.shields.io/npm/v/import-generator.svg)](https://npmjs.org/package/import-generator) [![npm](http://img.shields.io/npm/dm/import-generator.svg)](https://npmjs.org/package/import-generator)

[![Greenkeeper badge](https://badges.greenkeeper.io/noyobo/import-generator.svg)](https://greenkeeper.io/)

> Module schema conversion to import statements

`npm install import-generator`

### Usage

```js
var generator = require('import-generator');

// input
var importSchema = {
  "name": "@ali/ice",
  "default": "ICE",
  "members": [{
    "name": "Accordion",
    "alias": "Accordion"
  }, {
    "name": "Button",
    "alias": "Btn"
  }, {
    "name": "Form",
    "alias": "Form"
  }]
}

generator(importSchema)

// output:
import ICE, { Accordion, Button as Btn, Form } from "@ali/ice";
```

### Related

- detective-module [![npm](http://img.shields.io/npm/dm/detective-module.svg)](https://npmjs.org/package/detective-module) Get the dependencies specifier of an ES6 module