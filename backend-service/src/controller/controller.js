import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import create from './routes/create.js';


export default (app) => {
	create(app);
	return app
}