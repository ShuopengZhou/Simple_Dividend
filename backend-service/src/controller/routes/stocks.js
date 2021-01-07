const createPortfoliosPerStock = require('../../service/create.js');
const logger = require('../../logger/logger.js');
const config = require('../../config/config.js');
const createPortofoliosPerStock = require('../../service/portofolios');

module.exports = (app) => {
  app.get(config.routes.createPortfoliosPerStock, (req, res) => {
      createPortofoliosPerStock(req.body.email, req.body.stockInfo);
      logger("Update user" + req.body.email + "stock information");
      return res.json({ status: 'success' }).status(200);
  });
};
