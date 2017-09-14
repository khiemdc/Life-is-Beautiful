// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/api/user", function(req, res) {
    // findAll returns all entries for a table when used with no options
db.User.create({user: 'this',

    name: 'DataTypes.STRING',

    email: 'DataTypes.STRING',

    password: 'DataTypes.STRING',

    movingTo: 'DataTypes.STRING',

    movingFrom: 'DataTypes.STRING',

    salary: 'DataTypes.STRING',

    household: 5,

    }).then(function(res) {
 console.log(res)
    });
  });

  // POST route for saving a new todo
  app.post("/api/User", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.LifeisBeautiful.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbLifeisBeautiful) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/user/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/user", function(req, res) {

  });
};
