import cookies from 'js-cookie';
import {comparisonCookieName, commaSeparator, standardPath, getCookieAsArray} from '../utils/common-cookie-utils';
import {cookieKeepingPeriod, getDomain} from '../utils/global-config';

window.addEventListener('comparisonAddItem', (e) => {
  addComparison(e.detail);
});
window.addEventListener('comparisonRemoveItem', (e) => {
  removeComparison(e.detail);
});

export function addComparison(productId) {
  const arr = getCookieAsArray(comparisonCookieName);
  const newArr = [productId, ...arr];
  updateComparisionCookie(newArr);
  window.dispatchEvent(createEventComparisonUpdate(newArr));
}

function createEventComparisonUpdate(data) {
  return new CustomEvent('comparisonUpdate', { 'detail': data });
}

function updateComparisionCookie(arr) {
  const expires = arr.length > 0 ? parseInt(cookieKeepingPeriod, 10) : 0;
  cookies.set(
    comparisonCookieName,
    arr.join(commaSeparator),
    {
      path: standardPath,
      expires,
      domain: getDomain()
    });
}

export function removeComparison(value) {
  const arr = getCookieAsArray(comparisonCookieName);
  const filteredArr = arr.filter((i) =>  i !== value);
  updateComparisionCookie(filteredArr);
  window.dispatchEvent(createEventComparisonUpdate(filteredArr));
}

export function getCompareItems() {
  return getCookieAsArray(comparisonCookieName);
}
