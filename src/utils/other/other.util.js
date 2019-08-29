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


module.exports = otherUtil;