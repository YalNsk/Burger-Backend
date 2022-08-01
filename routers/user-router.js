const userRouter = require('express').Router();

userRouter.route('/')
    .get((req, res) => { res.sendStatus(501);}) //Voir tous les users
    .post((req, res) => { res.sendStatus(501);}) //Ajout d'un nouveau user


userRouter.route('/:id')
    .get((req,res) => { res.sendStatus(501); }) //Info d'un user
    .put((req, res) => { res.sendStatus(501) ;}) //Modification d'un user
    .delete((req, res) => { res.sendStatus(501)}); //Suppresion d'un user
    

module.exports = userRouter;