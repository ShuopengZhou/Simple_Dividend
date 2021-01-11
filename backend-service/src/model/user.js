
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    email: String,
    accountType: { 
        type:String, 
        default:"free"
    },
    stockHolding:[{
        symbol: String,
        quantity: Number,
        purchasedDate: Date,
        averageCost: Number,
        currentDividendYield: Number,
        payoutSchedule:[{
            paymentDate: Date,
            payoutAmount: Number,
            declaredDate: Date,
            exDate: Date,
            recordDate: Date
        }],
        lastTimeUpdated: Date
    }]

});

module.exports  = mongoose.model("User", userSchema)

//module.exports = mongoose.model("User", userSchema);