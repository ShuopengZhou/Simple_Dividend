const User = require('../model/user.js');

const getAnnualDividend = async function(email, year) {
    console.log(year);
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


module.exports.getAnnualDividend = getAnnualDividend;