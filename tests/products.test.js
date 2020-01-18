const request = require('supertest');
const server = require('../app');
const ProductService = require('../services/productsService');
const Product = require('../models/Product')

test('able to get products', async () => {
    const response = await request(server)
        .get('/products')
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

test('able to create product', async () => {
    const response = await request(server)
        .post('/products')
        .send({
            name: 'Produto de teste',
            description: 'description de teste',
            price: 1.99
        })
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

test('able to get products with paginate filters', async () => {
    const response = await request(server)
        .get('/products?page_limit=1&page=1')
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

test('able to delete', async () => {
    const product = await ProductService.create({
        name: 'Produto de teste 2',
        description: 'description de teste 2',
        price: 2.99
    });

    const response = await request(server)
        .delete(`/products/${product._id}`)
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

test('able to update', async () => {
    const product = await ProductService.create({
        name: 'Produto de teste 3',
        description: 'description de teste 3',
        price: 3.99
    });
    
    const response = await request(server)
        .put(`/products/${product._id}`)
        .send({
            name: 'Produto de teste 4',
            description: 'description de teste 4',
            price: 3.99
        })
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

test('able to client view product', async () => {
    const product = await ProductService.create({
        name: 'Produto de teste 5',
        description: 'description de teste 5',
        price: 3.99
    });
    
    const response = await request(server)
        .get(`/products/${product._id}`)
        .set('Authorization',  '123token987');
    expect(response.status).toBe(200);
});

afterAll(() => {
    Product.collection.remove({description: new RegExp('test', 'i')});
});