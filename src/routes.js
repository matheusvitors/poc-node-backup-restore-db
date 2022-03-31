const { Router } = require('express');
const packageJson = require('../package.json');
const CategoryController = require('./controllers/category.controller');

const routes = Router();

routes.get('/', (req, res) => {
	return res.status(200).json({ name: "poc-node-back-restore-db", version: packageJson.version , status: "connected"});
});

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.get);
routes.post('/categories', CategoryController.save);
routes.put('/categories', CategoryController.edit);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;
