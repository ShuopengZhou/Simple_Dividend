import { createUser } from '../../service/create.js';
import { logger } from '../../logger/logger.js'
import { config } from '../../config/config.js'

export default (app) => {
  app.get(config.routes.create, (req, res) => {
      createUser();
      logger("User created.")
      return res.json({ status: 'success' }).status(200);
  });
};
