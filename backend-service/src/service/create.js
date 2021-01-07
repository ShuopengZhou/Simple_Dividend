const User = require('../model/user.js');

module.exports = async (email) => {
    await User.create({
        email: email,
        accountType: 'free',
        overview :{
            annualDividend: 0,
            monthlyPayoutThisYear: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        stockHolding:[]
    })
}
