const Order = require('../models/order-model');

const orderController = {
    // voir toutes les commandes
    //populate pour afficher les infos supplémentaires
    getAll: async (req, res) => {
        const order = await Order.find()
        .populate({           
            path : 'burgers.burgerId',
            select : {name : 1, price : 1 }
        })
        .populate({
            path : 'userId',
            select : {firstname : 1, lastname :1, adress : 1}
        })
        ;
        res.status(200).json(order);
    },

    //infos d'une commande
    getById: async (req, res) => {
        const id = req.params.id;
        const order = await Order.findById(id)
        
        .populate({           
            path : 'burgers.burgerId',
            select : {name : 1, price : 1 }
        })
        .populate({
            path : 'userId',
            select : {firstname : 1, lastname :1, adress : 1}
        })
        ;

        if (order) {
            res.status(200).json(order);
        }
        else {
            return res.sendStatus(404);
        }
    },




    create: async (req, res) => {
        
        const orderToAdd = Order(req.body);
        console.log(orderToAdd);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);
        
        console.log("Nouvelle commande !");
    },




    //modification d'une commande --> réservé à l'admin
    update: async (req, res) => {

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