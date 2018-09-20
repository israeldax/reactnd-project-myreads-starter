/**
 * @description This component just render the child if test is true
 * @param {boolean} teste
 * @param {node} children
 */
export function If({ test, children }) {
  return test ? children : false
}