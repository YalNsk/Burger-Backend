const Order = require('../models/order-model');

const orderController = {
    // voir toutes les commandes
    //populate pour afficher les infos supplémentaires
    getAll: async (req, res) => {
        const order = await Order.find();
        res.status(200).json(order);
    },

    //infos d'une commande
    getById: async (req, res) => {
        const id = req.params.id;
        const order = await Order.findById(id);

        if (order) {
            res.status(200).json(order);
        }
        else {
            return res.sendStatus(404);
        }
    },




    create: async (req, res) => {
        console.log("Nouvelle commande !");

        const orderToAdd = Order(req.body);
        console.log(orderToAdd);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);
    },




    //modification d'une commande --> réservé à l'admin
    update: async (req, res) => {
        console.log("Commande modifiée");

        const id = req.params.id;
        const { burgers, deliveryTime, status} = req.body;
        const orderUpdated = await Order.findByIdAndUpdate(id, {
            burgers, deliveryTime, status
        }, 
        { returnDocument: 'after'}); 

        if(!orderUpdated){
            return res.sendStatus(404);        }
        else {
            return res.sendStatus(204);
        }
    },



    
    //supression d'une commande --> réservé à l'admin
    delete: async (req, res) => {
        const id = req.params.id;
        const orderToDelete = await Order.findByIdAndDelete(id);

        if(orderToDelete){
            res.sendStatus(204) //La requête a réussi mais l'appli client n'a pas besoin de quitter la page
            console.log("Commande annulée")
        }
        else {
            return res.sendStatus(404); 
        }
    }
}

module.exports = orderController;