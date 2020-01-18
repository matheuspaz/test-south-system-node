let Product = require('../models/Product');

module.exports = {
    async search (params) {
        let query = {};
        let options = {};

        if (params.id) {
            query._id = params.id;
        }
      
        if (params.description) {
            query.description = new RegExp(params.description, 'i');
        }
      
        if (params.price) {
            query.price = params.price;
        }
      
        if (params.name) {
            query.name = new RegExp(params.name, 'i');
        }
      
        if (params.page_limit) {
            options.limit = Number(params.page_limit);
        }
      
        if (params.page) {
            options.page = params.page;
        }
        
        return Product.paginate(query, options);
    },

    async findById (id) {
        return Product.findOne({"_id": id});
    },

    async create (body) {
        return Product.create(body);
    },

    async update (id, body) {
        return Product.findOneAndUpdate({"_id": id}, body, {new: true})
            .then((product) => {
                return product;
            });
    },

    async delete(id) {
        return Product.deleteOne({"_id": id});
    }
}