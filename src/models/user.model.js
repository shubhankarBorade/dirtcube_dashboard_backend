const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   role : {
      type : String
   },
   fullName : {
      type : String
   },
   username : {
      type : String,
      unique : true
   },
   email : {
      type : String,
      unique : true
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