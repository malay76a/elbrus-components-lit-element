System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {

            exports('a', uniqid);

            var pid = process && process.pid ? process.pid.toString(36) : '';
            var address = '';

            function now() {
              var time = Date.now();
              var last = now.last || time;
              return now.last = time > last ? time : last + 1;
            }

            function process(prefix) {
              return (prefix || '') + pid + now().toString(36);
            }
            function uniqid (prefix) {
              return (prefix || '') + address + pid + now().toString(36);
            }

        }
    };
});
//# sourceMappingURL=chunk-eee526ef.js.map
