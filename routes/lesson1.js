const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.gwenRoute);
routes.get('/fabian', lesson1Controller.fabianRoute);

module.exports = routes;