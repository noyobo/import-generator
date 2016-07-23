import moduleGenerate from '../index.es6.js';

var dec = {
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

console.log(moduleGenerate(dec))