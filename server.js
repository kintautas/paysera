

const file = require('./modules/readFile.js')
const Ops = require('./modules/operations.js')
var operations = new Ops()

const load = require('./modules/loadFromJSON.js')



var content = null;
var content = file.readFile(process.argv[2])
if (!content) process.exit()
load.loadFromJSON().then(parameters => {
    var users = [];
        
    for (var i = 0; i < content.length; i++) {
            if (content[i].type == 'cash_in') {
                var result = operations.cashIn(content[i].operation.amount, parameters[0].percents, parameters[0].max.amount)
                console.log(result)
            }
            else {
                if (content[i].user_type == 'juridical') {
                    var result = operations.cashOutJuridical(content[i].operation.amount, parameters[2].percents, parameters[2].min.amount)
                    console.log(result) 
                }
                else if (content[i].user_type == 'natural') {
                    var result = operations.cashOutNatural(content[i].user_id, content[i].operation.amount, content[i].date, parameters[1].percents,
                                                           parameters[1].week_limit.amount )
                    console.log(result)
                    // console.log(week.weekNumber(new Date(content[i].date)))
                    
                    
                }                    
            }

    }

})
