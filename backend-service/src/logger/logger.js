const fs = require('fs');
const sd = require('silly-datetime');

module.exports = (str) => {
    let timestamp = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    fs.appendFile('console.log', timestamp + '   --------   ' + str + '\n',  function(err) {
        if (err) {
            return console.error("Timestamp: " + timestamp + "    Error: " + err);
        }
        console.log("Timestamp: " + timestamp);
    }); 
}