const orderRouter = require('express').Router();

orderRouter.route('/')
    .get((req, res) => { res.sendStatus(501);}) //Voir tous les orders
    .post((req, res) => { res.sendStatus(501);}) //Ajout d'un nouveau order


orderRouter.route('/:id')
    .get((req,res) => { res.sendStatus(501); }) //Info d'un order
    .put((req, res) => { res.sendStatus(501) ;}) //Modification d'un order
    .delete((req, res) => { res.sendStatus(501)}); //Suppresion d'un order
    

module.exports = orderRouter;