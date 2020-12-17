import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs'
let sd = require('silly-datetime');

function logger(str){
    let timestamp = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    fs.appendFile('console.log', timestamp + '   --------   ' + str + '\n',  function(err) {
        if (err) {
            return console.error("Timestamp: " + timestamp + "    Error: " + err);
        }
        console.log("Timestamp: " + timestamp);
    }); 
}

export { logger };