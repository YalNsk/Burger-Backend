const userRouter = require('express').Router();
const userController = require('../controllers/user-controller');
const bodyValidation = require('../middlewares/body-validation');
const idValidator = require('../middlewares/idValidator');
const userValidator = require('../validators/user-validator');

userRouter.route('/')
    .get(userController.getAll) //Voir tous les users
    .post(bodyValidation(userValidator), userController.create) //Création d'un user

userRouter.route('/:id')
    .get(idValidator(), userController.getByID) //Info d'un user
    .put(idValidator(), bodyValidation(userValidator), userController.update) //Modification d'un user
    .delete(idValidator(), userController.delete); //Suppresion d'un user
    

module.exports = userRouter;