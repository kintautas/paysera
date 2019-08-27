const fs = require('fs');

function readFile(filename) {
    if (filename) {
        try {
            content = fs.readFileSync('./data/' + filename, 'utf8');
            try {
                return JSON.parse(content);
            }
            catch(error) {
               console.log("Error parsing JSON")
               return null;
            }
        }
        catch (error) {
            console.log("Error oppening filename")
            return null;
        }   
    } else {
        console.log("Error. No filename provided in path");
        return null;
    }
    
}

module.exports = {
    readFile: readFile
}