const screenLg = 1200;
const screenMd = 992;
const screenSm = 768;
export const screenLgMin = screenLg;
export const screenMdMax = screenLg - 1;
export const screenSmMax = screenMd - 1;
export const screenXsMax = screenSm - 1;

export const screenMdMin = screenMd;
export const screenSmMin = screenSm;

export function matchMediaQuery(query) {
  return window.matchMedia(query).matches;
}

export function isLg() {
  return matchMediaQuery(`(min-width: ${screenLgMin}px)`);
}

export function isMd() {
  return matchMediaQuery(`(max-width: ${screenMdMax}px) and (min-width: ${screenMd}px)`);
}

export function isSm() {
  return matchMediaQuery(`(max-width: ${screenSmMax}px) and (min-width: ${screenSm}px)`);
}

export function isXs() {
  return matchMediaQuery(`(max-width: ${screenXsMax}px)`);
}

export function isMobile() {
  return isSm() || isXs();
}

export function respond(val) {
  return matchMediaQuery(`(max-width: ${val}px)`);
}

export function respondFrom(val) {
  return matchMediaQuery(`(min-width: ${val}px)`);
}