const screenMd = 992;
const screenSm = 768;
const screenSmMax = screenMd - 1;
const screenXsMax = screenSm - 1;
function matchMediaQuery(query) {
  return window.matchMedia(query).matches;
}
function isSm() {
  return matchMediaQuery(`(max-width: ${screenSmMax}px) and (min-width: ${screenSm}px)`);
}
function isXs() {
  return matchMediaQuery(`(max-width: ${screenXsMax}px)`);
}
function isMobile() {
  return isSm() || isXs();
}

export { isMobile as a, isXs as b };
//# sourceMappingURL=chunk-bb8482fa.js.map
