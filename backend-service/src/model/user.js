
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    email: String,
    accountType: { 
        type:String, 
        default:"free"
    },
    overview: {
        annualDividend: Number,
        monthlyPayoutThisYear: [Number]
    },
    stockHolding:[{
        symbol: String,
        amount: Number,
        averageCost: Number,
        currentDividendYield: Number,
        payoutSchedule:[{
            date: Date,
            payoutAmount: Number
        }]
    }]

});

module.exports  = mongoose.model("User", userSchema)

//module.exports = mongoose.model("User", userSchema);