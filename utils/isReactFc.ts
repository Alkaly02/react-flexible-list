export const isReactFC = (element: any): element is React.FC<any> => {
  return typeof element === 'function'
    && typeof element.prototype === 'undefined'
    && typeof element.displayName === 'string';
};