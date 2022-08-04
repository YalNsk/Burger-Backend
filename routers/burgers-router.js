const burgerRouter = require('express').Router();
const burgerController = require('../controllers/burger-controller')
const bodyValidation = require('../middlewares/body-validation')
const idValidator = require('../middlewares/idValidator');
const burgerValidator = require('../validators/burger-validator');

burgerRouter.route('/')
    .get(burgerController.getAll) //Voir tous les burgers
    .post(bodyValidation(burgerValidator), burgerController.create) //Ajout d'un nouveau burger


burgerRouter.route('/:id')
    .get(idValidator(), burgerController.getById ) //Info d'un burger
    .put(idValidator(), bodyValidation(burgerValidator), burgerController.update) //Modification d'un burger
    .delete(idValidator(), burgerController.delete); //Suppresion d'un burger
    

module.exports = burgerRouter;