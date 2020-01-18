const ProductService = require('../services/productsService');
test('create product', async () => {
    let body = {
        name: 'Produto 1',
        price: 29.99,
        description: 'Produto 1 de qualidade'
    };

    let product = await ProductService.create(body);
    expect(product.name).toBe(body.name);
});