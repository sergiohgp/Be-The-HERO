const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// List and create  all the ongs in the database
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

// route to check profile
routes.get('/profile', ProfileController.index);

// Routes to manipulate the incidents
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;