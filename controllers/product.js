const {db} = require('../lib/utils/mongo_root');
const COLLECTION_NAME = 'items';

 async function getProducts() {
  const products = await db()
    .collection(COLLECTION_NAME)
    .find({})
    .toArray()
  return products;
}

async function insertProduct(product) {
  await db().collection(COLLECTION_NAME)
    .insertOne(product)
  return;
}

async function getOneById(id) {
  const product = await db().collection(COLLECTION_NAME)
    .findOne({id: id})
  return product;
}





module.exports = [getProducts, insertProduct,getOneById];