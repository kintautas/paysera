var Request = require("request");

function loadFromJSON() {
    var cashInPromise = new Promise(resolve => 
        {
            Request.get("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in", (error, response, body) => {
            if(error) {
                console.dir(error);
                process.exit()
            }
            resolve(JSON.parse(body));
            })
        }
    );
    var naturalPromise = new Promise(resolve => {
        Request.get("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural", (error, response, body) => {
            if(error) {
                console.dir(error);
                process.exit()
            }
            resolve(JSON.parse(body))
        });
    })
    var juridicalPromise = new Promise(resolve => {
        Request.get("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical", (error, response, body) => {
            if(error) {
                console.dir(error);
                process.exit()
            }
            resolve(JSON.parse(body));
        });
    })
    
    return Promise.all([cashInPromise, naturalPromise, juridicalPromise])
}

module.exports = {
    loadFromJSON: loadFromJSON
}
