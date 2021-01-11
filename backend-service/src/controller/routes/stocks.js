const createPortfoliosPerStock = require('../../service/create.js');
const logger = require('../../logger/logger.js');
const config = require('../../config/config.js');
const createPortofoliosPerStock = require('../../service/portofolios');
const stockInfoModule =  require('../../service/getStockInfo');
const getAnnualDividend = stockInfoModule.getAnnualDividend;

module.exports = (app) => {
  app.post(config.routes.createPortfoliosPerStock, (req, res) => {
      createPortofoliosPerStock(req.body.email, req.body.stockInfo);
      logger("Update user" + req.body.email + "stock information");
      return res.json({ status: 'success' }).status(200);
  });

  // Get annual payout dividends
  app.get(config.routes.getAnnualDividend, async (req, res) => {
      const year = req.query.year;
      const email = req.query.email;

      logger("Retrieve user" + email + "annual dividend information");

      let amount = await getAnnualDividend(email, year);

      return res.json({ amount: amount }).status(200);

  })

  // Get monthly payout amount

};
