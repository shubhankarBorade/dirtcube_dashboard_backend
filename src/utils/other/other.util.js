const otherUtil = {};
const assert = require("assert");

otherUtil.convertBufferToString = (buffer) => {
   return new Promise(async (resolve, reject) => {
      try {
         assert(buffer, "Missing buffer");
         return resolve(buffer.toString("hex"));
      } catch (e) {
         console.log(e);
         return reject(e);
      }
   })
};

otherUtil.buildErrorMessage = (code) => {
  switch (code) {
     case 400 :
        return {code : 400, error : "bad request"};
     case 401 :
        return {code : 401, error : "Authentication error"};
     default:
        return {code : 500, error : "Internal server error"};
  }
};


module.exports = otherUtil;