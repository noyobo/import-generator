### import-generator [![npm](http://img.shields.io/npm/v/import-generator.svg)](https://npmjs.org/package/import-generator) [![npm](http://img.shields.io/npm/dm/import-generator.svg)](https://npmjs.org/package/import-generator)

> Module schema conversion to import statements

`npm install import-generator`

### Usage

```js
var generator = require('import-generator');

// input
var importSchema = {
  "name": "@ali/ice",
  "members": [{
    "name": "Accordion",
    "alias": "Accordion"
  }, {
    "name": "Button",
    "alias": "Button"
  }, {
    "name": "Form",
    "alias": "Form"
  }]
}

generator(importSchema)

// output:
import { Accordion, Button, Form } from "@ali/ice";
```

### Related

- detective-module [![npm](http://img.shields.io/npm/dm/detective-module.svg)](https://npmjs.org/package/detective-module) Get the dependencies specifier of an ES6 module