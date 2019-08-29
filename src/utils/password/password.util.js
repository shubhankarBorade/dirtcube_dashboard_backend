const crypto = require("crypto");
const assert = require("assert");

const otherUtil = require("../other/other.util");

const passwordUtil = {};

passwordUtil.getHashedPassword = (password) => {
   return new Promise(async (resolve, reject) => {
      try {
         assert(password, "Missing password");
         const salt = await otherUtil.convertBufferToString(crypto.randomBytes(64));
         crypto.pbkdf2(password, salt, 100000, 16, "sha512", (err, hashedPassword) => {
            if (!err || hashedPassword) {
               return resolve({salt, hashedPassword});
            }
            return reject("Could not hashed the password");
         });
      } catch (e) {
         console.log(e);
         return reject(e);
      }
   });
};

module.exports = passwordUtil;