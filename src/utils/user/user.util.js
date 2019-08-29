const assert = require("assert");


const User = require("../../models/user.model");

const userUtil = {};

userUtil.createUser = (role, fullName, username, email, password, salt) => {
   return new Promise(async (resolve, reject) => {
      try {
         assert(role, "Missing role value");
         assert(fullName, "Missing fullName value");
         assert(username, "Missing username value");
         assert(email, "Missing email value");
         assert(password, "Missing password value");

         const newUserObject = {role, fullName, username, email, password, salt};

         const newUser = await User.create(newUserObject);
         return resolve(newUser);
      } catch (e) {
         console.log(e);
         return reject(e);
      }
   })
};


module.exports = userUtil;