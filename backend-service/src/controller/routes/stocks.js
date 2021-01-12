const createPortfoliosPerStock = require('../../service/create.js');
const logger = require('../../logger/logger.js');
const config = require('../../config/config.js');
const createPortofoliosPerStock = require('../../service/portofolios');
const stockInfoModule =  require('../../service/getStockInfo');
const getAnnualDividend = stockInfoModule.getAnnualDividend;
const getMonthlyDividend = stockInfoModule.getMonthlyDividend;
const getMonthlyPayee = stockInfoModule.getMonthlyPayee;

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
  app.get(config.routes.getMonthlyDividend, async (req, res) => {
      const year = req.query.year;
      const month = req.query.month;
      const email = req.query.email;

      logger("Retrieve user" + email + "monthly dividend information for" + month);

      let amount = await getMonthlyDividend(email, year, month);
      return res.json({ amount: amount }).status(200);
  })
  // Get monthly paytout companies
  app.get(config.routes.getMonthlyPayee, async (req, res) => {
      const year = req.query.year;
      const month = req.query.month;
      const email = req.query.email;

      logger("Retrieve user" + email + "monthly dividend payee information for" + month);
      let payeeList = await getMonthlyPayee(email, year, month);
      return res.json({ 
        year: year,
        month: month,
        result: payeeList
      }).status(200);
  
  })
};
