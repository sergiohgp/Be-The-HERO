const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

/**
 * Routes
 * HTTP methods:
 * 
 * GET: Gets/lists  info from back-end
 * POST: Creates an info on the back-end
 * PUT: Change an inf on the back-end 
 * DELETE: Deletes an info on the back-end
 */

 /**
  * Parameters types:
  * 
  * QUERY PARAMS: known parameters int he route after "?" (Filter/pagination)
  * ROUTE PARAMS: Identify resources
  * REQUEST BODY: Used to create/change resources
  */

  /**
   * SQL
   * NoSQL
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



app.listen(3333);