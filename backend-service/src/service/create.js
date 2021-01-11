const User = require('../model/user.js');

module.exports = async (email) => {
    await User.create({
        email: email,
        accountType: 'free',
        stockHolding:[]
    })
}
