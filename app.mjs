import config from './config/config';
import models from './models';
console.log(config.name);

new models.User();
new models.Product();