var mongoose = require('mongoose')
    , config = require('../config')
    , connectionString = config.get('mongo:url');

mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]
});

var hotelSchema = new Schema({
  name: String,
  place: [placeSchema],
  num_stars: Number,
  amenities: String
});

var thingsToDoSchema = new Schema({
  name: String,
  place: [placeSchema],
  age_range: String
});

var restaurantSchema = new Schema({
  name: String,
  place: [placeSchema],
  cuisine: String,
  price: Number
});

var visitSchema = new Schema({
  _attraction: Schema.Types.ObjectId,
  attraction_type: String,
  day_number: Number
});

exports.Place = mongoose.model('Place', placeSchema);
exports.Hotel = mongoose.model('Hotel', hotelSchema);
exports.ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);
exports.Restaurant = mongoose.model('Restaurant', restaurantSchema);
exports.Visit = mongoose.model('Visit', visitSchema);
