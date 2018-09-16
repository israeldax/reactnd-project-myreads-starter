/**
 * @description Retorna string recebido em formato camel case
 * @param {string} texto String em qualquer formato
 * @returns {string} String no formato camel case
 */
export function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
  }).replace(/\s+/g, '')
}

/**
 * @description Componente que só exibe children se passar no teste
 * @param {boolean} teste
 * @param {*} children
 */
export function If({ test, children }) {
  return test ? children : false
}