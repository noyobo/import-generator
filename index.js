'use strict';

var _babelGenerator = require('babel-generator');

var _babelGenerator2 = _interopRequireDefault(_babelGenerator);

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function generateImportAst(dec) {
  var importSpecifierQueue = [];

  if (dec.members && dec.members.length > 0) {
    dec.members.forEach(function (member) {
      importSpecifierQueue.push(t.ImportSpecifier(t.Identifier(member.alias), t.Identifier(member.name)));
    });
  }
  if (dec.default) {
    importSpecifierQueue.push(t.importDefaultSpecifier(t.Identifier(dec.default)));
  }
  if (dec.star) {
    importSpecifierQueue.push(t.ImportNamespaceSpecifier(t.Identifier(dec.alias)));
  }

  if (importSpecifierQueue.length > 0) {
    var result = (0, _babelGenerator2.default)(t.ImportDeclaration(importSpecifierQueue, t.stringLiteral(dec.name)));

    return result.code || '';
  }
  return '';
};
