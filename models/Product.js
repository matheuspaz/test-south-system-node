const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    description: String,
    price:   Number,
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);