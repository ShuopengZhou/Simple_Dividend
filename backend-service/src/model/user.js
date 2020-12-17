import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let mongoose = require("mongoose");

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

let User = mongoose.model("User", userSchema)

export { User };
//module.exports = mongoose.model("User", userSchema);