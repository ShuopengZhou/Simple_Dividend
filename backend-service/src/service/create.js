import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { User } from '../model/user.js'

function createUser(){
    User.create({
        email: 'xtjnj95@gmail.com',
        accountType: 'free',
        overview :{
            annualDividend: 100,
            monthlyPayoutThisYear: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        stockHolding:[{
            symbol: 'AAPL',
            amount: 100,
            averageCost: 100,
            currentDividendYield: 100,
            payoutSchedule:[{
                date: new Date(),
                payoutAmount: 100
            }]
        }]
    })
}

export { createUser };