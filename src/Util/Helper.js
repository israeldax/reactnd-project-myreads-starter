/**
 * @description Componente que só exibe children se passar no teste
 * @param {boolean} teste
 * @param {*} children
 */
export function If({ test, children }) {
  return test ? children : false
}