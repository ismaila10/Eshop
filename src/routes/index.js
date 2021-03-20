const express = require('express');
const router = express.Router();
const ordersRouter = require('./orders.route');
const usersRouter = require('./users.route');
// const productsRouter = require('./products.route');

router.use(usersRouter);
router.use(ordersRouter);
// router.use(productsRouter);

module.exports = router;