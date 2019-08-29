const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   role : {
      type : String
   },
   fullName : {
      type : String
   },
   username : {
      type : String
   },
   email : {
      type : String
   },
   password : {
      type : String
   },
   salt : {
      type : String
   },
   token : {
      type : String
   },
   createdAt : {
      type : Number
   },
   lastModified : {
      type : Number
   }
});

module.exports = mongoose.model("User", userSchema);