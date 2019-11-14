var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = new Schema ({
    image: { type: String, required: true},
    name: { type: String, required: true},
    price: { type: String, required: true},
    description: { type: String, required: true}
});

itemSchema.pre('save', function(next) {
    next();
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;