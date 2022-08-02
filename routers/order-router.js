const orderRouter = require('express').Router();
const orderController = require('../controllers/order-controller')

orderRouter.route('/')
    .get(orderController.getAll) //Voir tous les orders --> réservé à l'admin
    .post(orderController.create) //Ajout d'un nouveau order


orderRouter.route('/:id')
    .get(orderController.getById) //Info d'un order 
    .put(orderController.update) //Modification d'un order --> réservé à l'admin
    .delete(orderController.delete); //Suppresion d'un order --> réservé à l'admin 
    

module.exports = orderRouter;