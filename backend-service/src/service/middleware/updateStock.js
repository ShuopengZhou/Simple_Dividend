// const User = require('../model/user.js');
const axios = require('axios');
const config = require('../../config/config');
const User = require('../../model/user.js');
module.exports =  async(email, stockInformation) => {
    const stockSymbol = stockInformation.symbol;
    const quantity = stockInformation.quantity;
    const range = '/1y'; // the data 1 year forward
    const url = config.apiEndpointBasic 
                + stockSymbol 
                + '/dividends/'
                + range;
    // console.log(url);
    axios.get(url, 
    {
        params: {
            token: "Tpk_381b50736124481f9f398be8244016cb",
            filter: "amount,declaredDate,exDate,recordDate,paymentDate"
        }
    }).then(async (res) => {
        // console.log(res.data);
        // Update annual dividend income
        const data = res.data;
        let totalAmount = 0;

        console.log("LENGTH" + data.length);

        data.forEach((entry) => {
            console.log("Entry");
            console.log(entry);
            totalAmount += entry.amount;
        })
        
        console.log("Total amount" + totalAmount);
        // const paymentDate = res.paymentDate;
        console.log(quantity);
        const addedAnnualDividendAmount = totalAmount * quantity;

        console.log("New annual dividend amount" + addedAnnualDividendAmount);
        // update annual dividend amount in the user box
        const filter = { email: email};
        const update = {
            "$inc": {
                "overview.annualDividend": addedAnnualDividendAmount
            }
        }
    
        await User.findOneAndUpdate(filter, update, {new: true})
    }).catch(error => {
        console.log(error);
    });
}