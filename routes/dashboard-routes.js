// Requiring our resource model
var db = require("../models");

// Routes
module.exports = function(app) {



// GET route for getting all of the resources:  
  app.get("/getresources", function(req, res) {
    db.Resource.findAll({})
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // POST for creating new member listing
  app.post("/getresources", function(req, res) {
    db.Resource.create({
      name : req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbResource) {
      
        
      });
  });

  // // DELETE route
  // app.delete("/resources/:id", function(req, res) {
  //   db.Resource.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbResource) {
  //       res.json(dbResource);
  //     });
  // });

//   // PUT route for updating members
//   app.put("/api/resources", function(req, res) {
//     db.Resource.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbResource) {
//         res.json(dbResource);
//       });
//   });
 };