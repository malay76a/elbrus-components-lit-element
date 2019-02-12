let pid = process && process.pid ? process.pid.toString(36) : '';
let address = '';

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

export { uniqid as a };
//# sourceMappingURL=chunk-ef0f8014.js.map
