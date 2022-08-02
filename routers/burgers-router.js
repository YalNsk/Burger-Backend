const burgerRouter = require('express').Router();
const burgerController = require('../controllers/burger-controller')

burgerRouter.route('/')
    .get(burgerController.getAll) //Voir tous les burgers
    .post(burgerController.create) //Ajout d'un nouveau burger


burgerRouter.route('/:id')
    .get(burgerController.getById ) //Info d'un burger
    .put(burgerController.update) //Modification d'un burger
    .delete(burgerController.delete); //Suppresion d'un burger
    

module.exports = burgerRouter;