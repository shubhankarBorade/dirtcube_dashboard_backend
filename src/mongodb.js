const mongoose = require("mongoose");
const config = require("./config");

const mongodb = {};

mongodb.init = () => {
   mongoose.connect(config.mongodbURL, {useNewUrlParser: true})
       .then(connection => {
          const db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', function () {
             console.log('Database connected');
          });
       }).catch(e => console.log(e))
};

module.exports = mongodb;