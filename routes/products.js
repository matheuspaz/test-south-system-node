let express = require('express');
let router = express.Router();
let hasToken = require('../middleware/hasToken');
let Product = require('../models/Product');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const products = await Product.find();
  return res.send(products);
});

router.post('/create', hasToken, async function(req, res, next) {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

module.exports = router;
