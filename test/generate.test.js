import moduleGenerate from '../index.es6.js';

var dec = {
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


console.log(moduleGenerate(dec))