let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    description: String,
    price:   Number,
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);