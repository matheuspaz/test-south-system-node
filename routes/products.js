const express = require('express');
const router = express.Router();
const hasToken = require('../middleware/hasToken');
const ProductService = require('../services/productsService');

router.get('/', async function(req, res, next) {
  try {
    return res.status(200).send(await ProductService.search(req.query));
  } catch (err) {
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    return res.status(200).send(await ProductService.findById(req.params.id));
  } catch (err) {
    console.log(err);
    
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

router.post('/', hasToken, async function(req, res, next) {
  try {
    return res.status(200).json(await ProductService.create(req.body));
  } catch (err) {
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

router.put('/:id', hasToken, async function(req, res, next) {
  try {
    return res.status(200).json(await ProductService.update(req.params.id, req.body));
  } catch (err) {
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

router.delete('/:id', hasToken, async function(req, res, next) {
  try {
    ProductService.delete(req.params.id);
    return res.status(200).json({message: 'Deleted successful.'})
  } catch (err) {
    return res.status(500).json({message: 'An error occurred on server.'});
  }
});

module.exports = router;
