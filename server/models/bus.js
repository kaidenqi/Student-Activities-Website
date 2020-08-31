var mongoose = require('mongoose');

var BusSchema = new mongoose.Schema({
    nameOnCard: String,
    cardNum: String,
    cvv: String,
    exp: String,
    billingName: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    phone: String,
    choice2: Number,
    choice4: Number,
    choice6: Number,
    choice40: Number,
    amount: Number,
    creator: String,
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bus', BusSchema);