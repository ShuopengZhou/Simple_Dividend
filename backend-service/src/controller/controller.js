
const createUserRoute = require('./routes/create.js');
const createStockRoute = require('./routes/stocks');

module.exports =(app) => {
	createUserRoute(app);
	createStockRoute(app);
	return app
}