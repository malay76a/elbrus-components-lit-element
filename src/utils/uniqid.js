let pid = process && process.pid ? process.pid.toString(36) : '' ;
let address = '';

function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

export function process(prefix){ return (prefix || '') + pid + now().toString(36); }
export function time(prefix){ return (prefix || '') + now().toString(36); }
export default function(prefix){ return (prefix || '') + address + pid + now().toString(36); }