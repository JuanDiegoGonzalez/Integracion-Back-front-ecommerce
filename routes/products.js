var express = require('express');
var router = express.Router();
var [getProducts, insertProduct, getOneById] = require('../controllers/product');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.send(products);
});

/* GET product listing. */
router.get('/:id', async function (req, res, next) {
  if(req.params && req.params.id){
    const product = await getOneById(req.params.id);
    res.send(product);
  }else{
    return res.status(412).send({error: 'invalid param'})
  }
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  try {
    await insertProduct(req.body);
    console.log('id', req.body.id)
    const newProduct = await getOneById(req.body.id)
    res.send(newProduct);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

module.exports = router;