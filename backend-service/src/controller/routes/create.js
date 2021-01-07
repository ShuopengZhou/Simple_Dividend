const logger = require('../../logger/logger.js');
const config = require('../../config/config.js');
const createUser = require('../../service/create.js')
module.exports = (app) => {
  app.post(config.routes.create, (req, res) => {
      // console.log("Email is" + req.query.email);
      createUser(req.query.email);
      logger("User created.")
      return res.json({ status: 'success' }).status(200);
  });
};
