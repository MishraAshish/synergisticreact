var mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/training');//user

var Schema = mongoose.Schema;

var userSchema = new Schema({ Name: String, Password: String});

var UserSchema = mongoose.model('user', userSchema);

module.exports = UserSchema;