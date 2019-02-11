const elConfig = document.querySelector('.config');

export const cookieKeepingPeriod = elConfig.dataset.cookieKeepingPeriod;

export function getDomain() {
  const hostname = window.location.hostname;
  const separator = '.';
  const start = hostname.indexOf(separator);
  let result = '';

  if (start !== -1 || !hostname.match(/^[0-9.]+$/)) {
    const split = hostname.split(separator);
    result = hostname.split(separator).slice(split.length - 2).join(separator);
  }

  return result;
}
