const User = require('../model/user.js');

module.exports =  async(email, stockInformation) => {
    console.log("Email" + email);
    console.log("stockInformation" + stockInformation);
    const filter = { email: email};
    const update = {
        "$push": {
            "stockHolding": stockInformation
        }
    }

    let user = await User.findOneAndUpdate(filter, update, {new: true})
    
}
