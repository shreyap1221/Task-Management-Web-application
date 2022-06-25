var mongoose = require('mongoose');

/*var MemberSchema = new mongoose.Schema({
  id: String,
  teamid:String,
  Name: String
});*/

var TeamSchema = new mongoose.Schema({
  id: String,
  Name: String,
  domain: String,
  member:[Object],
  project:String,
  description: String,
  //updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Team', TeamSchema);