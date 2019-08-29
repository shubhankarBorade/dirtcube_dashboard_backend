const assert = require("assert");

const userUtil = require("../utils/user/user.util");
const passwordUtil = require("../utils/password/password.util");

const userController = {};

userController.create = (role, fullName, username, email, password) => {
   return new Promise(async (resolve, reject) => {
      try {
         assert(role, "Missing role value");
         assert(fullName, "Missing fullName value");
         assert(username, "Missing username value");
         assert(email, "Missing email value");
         assert(password, "Missing password value");

         const {salt, hashedPassword} = await passwordUtil.getHashedPassword(password);
         const newlyCreatedUser = await userUtil.createUser(role, fullName, username, email, hashedPassword, salt);
         const userWithoutSensitiveInfo = await userUtil.getUserWithoutSensitiveInfo(newlyCreatedUser.toObject());
         return resolve(userWithoutSensitiveInfo);
      } catch (e) {
         console.log(e);
         return reject(e);
      }
   })
};

module.exports = userController;