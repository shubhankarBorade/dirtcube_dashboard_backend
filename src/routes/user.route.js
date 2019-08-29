const express = require("express");
const app = express();
const routesNames = require("../routeNames");
const userController = require("../controllers/user.controller");


app.route(routesNames.user)
    .post(async (req, res) => {
       try {
          const role = req.body.role ? req.body.role : "user";
          const fullName = req.body.fullName ? req.body.fullName : null;
          const username = req.body.username ? req.body.username : null;
          const email = req.body.email ? req.body.email : null;
          const password = req.body.password ? req.body.password : null;

          if (!role || !fullName || !username || !email || !password) {
             return res.status(400).json({Error: "missing values"});
          }

          const newCreatedUser = await userController.create(role, fullName, username, email, password);
          return res.status(200).json(newCreatedUser);
       } catch (e) {
          return res.status(e.code ? e.code : 500).json(e ? e : "Internal server error");
       }
    });

module.exports = app;