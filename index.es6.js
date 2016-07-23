import generate from 'babel-generator';
import * as t from 'babel-types';

module.exports = function generateImportAst(dec) {
  const importSpecifierQueue = [];

  if (dec.members && dec.members.length > 0) {
    dec.members.forEach((member) => {
      importSpecifierQueue.push(
        t.ImportSpecifier(
          t.Identifier(member.alias),
          t.Identifier(member.name)
        )
      )
    })
  }
  if (dec.default) {
    importSpecifierQueue.push(
      t.importDefaultSpecifier(
        t.Identifier(dec.default)
      )
    )
  }
  if (dec.star) {
    importSpecifierQueue.push(
      t.ImportNamespaceSpecifier(
        t.Identifier(dec.alias)
      )
    )
  }

  if (importSpecifierQueue.length > 0) {
    const result = generate(
      t.ImportDeclaration(
        importSpecifierQueue,
        t.stringLiteral(dec.name)
      )
    )

    return result.code || '';
  }
  return '';
}
