System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports({
        a: isMobile,
        b: isXs
      });

      var screenMd = 992;
      var screenSm = 768;
      var screenSmMax = screenMd - 1;
      var screenXsMax = screenSm - 1;
      function matchMediaQuery(query) {
        return window.matchMedia(query).matches;
      }
      function isSm() {
        return matchMediaQuery("(max-width: ".concat(screenSmMax, "px) and (min-width: ").concat(screenSm, "px)"));
      }
      function isXs() {
        return matchMediaQuery("(max-width: ".concat(screenXsMax, "px)"));
      }
      function isMobile() {
        return isSm() || isXs();
      }

    }
  };
});
//# sourceMappingURL=chunk-4836153e.js.map
