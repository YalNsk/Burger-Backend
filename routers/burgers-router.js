const burgerRouter = require('express').Router();

burgerRouter.route('/')
    .get((req, res) => { res.sendStatus(501);}) //Voir tous les burgers
    .post((req, res) => { res.sendStatus(501);}) //Ajout d'un nouveau burger


burgerRouter.route('/:id')
    .get((req,res) => { res.sendStatus(501); }) //Info d'un burger
    .put((req, res) => { res.sendStatus(501) ;}) //Modification d'un burger
    .delete((req, res) => { res.sendStatus(501)}); //Suppresion d'un burger
    

module.exports = burgerRouter;