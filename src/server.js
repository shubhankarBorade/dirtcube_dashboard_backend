const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const config = require("./config");

const userRoutes = require("./routes/user.route");
const logRoutes = require('./routes/logs.routes');

const server = {};

server.init = () => {
   app.use(bodyParser.urlencoded({extended : false}));
   app.use(bodyParser.json());

   app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
   });

   app.use(userRoutes);
   app.use(logRoutes);

   app.get("/", (req, res) => {
      res.send("Hello World!");
   });

   app.get('*', (req, res) => {
      res.status(404).send('Page not found');
   });

   app.listen(config.PORT, () => {
      console.log(`Server is running on PORT ${config.PORT}`);
   });
};

module.exports = server;