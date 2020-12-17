import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let User = require('../model/user');