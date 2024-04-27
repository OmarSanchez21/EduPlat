//models
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userID : {type: String, require: true, unique: true},
        userInfo: { 
            name: { type: String, required: true },
            lastname: { type: String, required: true },
            age: { type: Number, required: true },
            nickname: { type: String }
          },
          email: { type: String, required: true, unique: true },
          bio: { type: String },
          birthdate: { type: Date },
          profilePicture: { type: String },
          createdAt: { type: Date, default: Date.now },
          updatedAt: { type: Date, default: Date.now }       
    }
);

const User = mongoose.model("User",userSchema);

module.exports = User;
