export function getElemPos(elem) {
  for (let i = 0; i < elem.parentElement.children.length; i++) {
    if (elem.parentElement.children[i] === elem) {
      return i+1;
    }
  }
}

export function checkObject(obj) {
  return !!obj && typeof obj === 'object' && !isEmpty(obj);
}

export function isEmpty(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}
