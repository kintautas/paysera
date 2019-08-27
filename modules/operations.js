
const week = require('weeknumber')

var Operations = function() {
    function comissions(sum, comission) {
        return sum * comission / 100;
    }

    this.cashIn = function cashIn(sum, comission, maxAmount) {            
        var result = comissions(sum, comission)
        result > maxAmount ? result = maxAmount : null;
        return result.toFixed(2);
    }
    this.cashOutJuridical  = function cashOutJuridical(sum, comission, minAmount) {
        var result = comissions(sum, comission)
        // var resutl = Math.ceil(result);
        result < minAmount ? result = minAmount : null;
        return result.toFixed(2)
    }
    var users = [];

    this.cashOutNatural =  function cashOutNatural(user, sum, date, comission, free) {
        var weekNumber = week.weekNumber(new Date(date)) + (new Date(date).getFullYear() * 100)
        var previousWeek;
        var result;
        var freeSum;
        users[user] ? previousWeek = users[user].week: previousWeek = weekNumber;
        users[user] ? freeSum = users[user].freeSum : freeSum = 0; 
        if (weekNumber > previousWeek) {
            freeSum = 0; // New week - no comission
        }
        if (freeSum !== 'none') { // If we have the free credit
            freeSum = freeSum + sum // Add total cash out
                if (freeSum > free) { // Cashed out free sum is bigger than possible                
                    result = comissions(freeSum - free, comission) // calculate percentage of exceeded sum   
                    freeSum = 'none'; // Nomore free cash out, flag -1 
                    users[user] = {
                        freeSum: freeSum, // Update the free cash value
                        week: weekNumber
                    }
                } 
                else { // We are in the limits
                    result = 0
                    users[user] = {
                        freeSum: freeSum, // Update the free cash value
                        week: weekNumber
                    }
                }     
        } else {
            result = comissions(sum, comission) // calulate the comissions
        }           
        return result.toFixed(2)
    }
}







module.exports = Operations