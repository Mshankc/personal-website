var mongoose =require('mongoose');

var personSchema = mongoose.Schema({
    name:String,
    div:String,
    age:String,
});

var Person = mongoose.model("person",personSchema);
module.exports = Person;