const server = require("./src/server");

const index = {};

index.init = () => {
  server.init()
};

index.init();

module.exports = index;
