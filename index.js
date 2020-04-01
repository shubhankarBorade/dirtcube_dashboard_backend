const server = require("./src/server");
const db = require("./src/mongodb");

const index = {};

index.init = () => {
   server.init();
   db.init()
};

index.init();

module.exports = index;
