const User = require('../model/user.js');

const getAnnualDividend = async function(email, year) {
    const filter = { email: email};
    let user = await User.findOne(filter).exec();

    let totalAmount = 0;
    const stockInformation = user.stockHolding;

    stockInformation.forEach((stock) => {
        const quantity = stock.quantity;
        const payoutSchedule = stock.payoutSchedule;

        payoutSchedule.forEach((entry) => {
            const paymentDate = new Date(entry.paymentDate);
            const paymentYear = paymentDate.getFullYear();
            if (paymentYear == year) {
                const amount = entry.payoutAmount * quantity;
                totalAmount += amount;
            }
        });
    });
    return totalAmount;
}

const getMonthlyDividend = async function(email, year, month) {
    const filter = { email: email};
    let user = await User.findOne(filter).exec();

    let totalAmount = 0;
    const stockInformation = user.stockHolding;

    stockInformation.forEach((stock) => {
        const quantity = stock.quantity;
        const payoutSchedule = stock.payoutSchedule;

        payoutSchedule.forEach((entry) => {
            const paymentDate = new Date(entry.paymentDate);
            const paymentYear = paymentDate.getFullYear();
            const paymentMonth = paymentDate.getMonth() + 1;
            if (paymentYear == year 
                && paymentMonth == month) {
                const amount = entry.payoutAmount * quantity;
                totalAmount += amount;
            }
        });
    });
    return totalAmount;
}

const getMonthlyPayee = async function(email, year, month) {
    const filter = { email: email};
    let user = await User.findOne(filter).exec();
    let res = [];
    const stockInformation = user.stockHolding;

    stockInformation.forEach((stock) => {
        const quantity = stock.quantity;
        const symbol = stock.symbol;
        const payoutSchedule = stock.payoutSchedule;

        payoutSchedule.forEach((entry) => {
            const paymentDate = new Date(entry.paymentDate);
            const paymentYear = paymentDate.getFullYear();
            const paymentMonth = paymentDate.getMonth() + 1;
            const newEntry = {quantity: quantity, symbol: symbol};
            
            if (paymentYear == year 
                && paymentMonth == month) {
                newEntry.payoutAmount = entry.payoutAmount;
                newEntry.paymentDate = entry.paymentDate;
                newEntry.declaredDate = entry.declaredDate;
                newEntry.exDate = entry.exDate;
                newEntry.recordDate = entry.recordDate;
                res.push(newEntry);
            }
        });
    });
    return res;
}



module.exports = {
    getAnnualDividend,
    getMonthlyDividend,
    getMonthlyPayee
}