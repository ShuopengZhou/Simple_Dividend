const User = require('../model/user.js');
const axios = require('axios');
const config = require('../config/config');
module.exports =  async(email, stockInformation) => {

    // Add stock details to corresponding user
    // Retrieve payout dividend information adding to payoutSchedule attribute
    const stockSymbol = stockInformation.symbol;
    // @TODO: Filter out time more properly regarding to years filtered
    const range = '/2y'; // the data 1 year forward
    const url = config.apiEndpointBasic 
                + stockSymbol 
                + '/dividends/'
                + range;
    axios.get(url, 
    {
        params: {
            token: "Tpk_381b50736124481f9f398be8244016cb",
            filter: "amount,declaredDate,exDate,recordDate,paymentDate"
        }
    }).then(async (res) => {
        // Current system will not hold for situation if one type stock purchased before and after dividend
        const data = res.data;
        const curDate = new Date();
        data.forEach((entry) => {
            // If stock is purchased after ex-div date, then stops
            const isBeforeExDate = new Date(entry.exDate) < new Date(stockInformation.purchasedDate) ? true : false;
            if (!isBeforeExDate) {
                const payoutScheduleEntry = new Object();             
                payoutScheduleEntry.paymentDate = entry.paymentDate;
                payoutScheduleEntry.payoutAmount = entry.amount;
                payoutScheduleEntry.declaredDate = entry.declaredDate;
                payoutScheduleEntry.exDate = entry.exDate;
                payoutScheduleEntry.recordDate = entry.recordDate;
                stockInformation.payoutSchedule.push(payoutScheduleEntry);
            }
        })


        const filter = { email: email};
        const update = {
            "$push": {
                "stockHolding": stockInformation
            }
        }
        let user = await User.findOneAndUpdate(filter, update, {new: true});
    }).catch(error => {
        console.log(error);
    });
}