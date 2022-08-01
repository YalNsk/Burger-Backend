const userRouter = require('./user-router');
const burgerRouter = require('./burgers-router');
const orderRouter = require('./order-router');

// Routeur parent 
const router = require('express').Router();

// Routeurs enfants (burgers, commandes, user)

router.use('/burger', burgerRouter);
router.use('/order', orderRouter);
router.use('/user', userRouter);

module.exports = router;