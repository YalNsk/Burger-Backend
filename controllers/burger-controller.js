const Burger = require('../models/burger-model');

const burgerController = {
    //voir tous les burgers
    getAll: async (req, res) => {
        const burger = await Burger.find();
        res.status(200).json(burger);
    },

    //infos d'un burger
    getById: async (req, res) => {
        const id = req.params.id; //récupération de l'id passé en paramètre
        const burger = await Burger.findById(id);

        if (burger) {
            res.status(200).json(burger);
        }
        else {
            return res.sendStatus(404);
        }
    },




    //ajout d'un burger --> réservé à l'admin
    create: async (req, res) => {
        console.log("Ajout d'un nouveau burger !");

        const burgerToAdd = Burger(req.body);
        console.log(burgerToAdd);
        await burgerToAdd.save();
        res.status(200).json(burgerToAdd);
    },




    //modification d'un burger
    update: async (req, res) => {
        console.log("Modification du burger");

        const id = req.params.id;
        //findByIdAndUpate(id, {}, {})
        //    Premier param : id
        //    Deuxième param : object avec les éléments à remplacer
        //    Troisième : les options
        const burgerUpdated = await Burger.findByIdAndUpdate(id, {
            name: req.body.name,
            ingredients : req.body.ingredients,
            price : req.body.price
        }, 
        { returnDocument: 'after'}); 

        if(burgerUpdated){
            res.status(200).json(burgerUpdated);
        }
        else {
            return res.sendStatus(404);
        }

        console.log(burgerUpdated);
    },



    
    //supression d'un burger --> réservé à l'admin
    delete: async (req, res) => {
        const id = req.params.id;
        const burgerToDelete = await Burger.findByIdAndDelete(id);

        if(burgerToDelete){
            res.sendStatus(204) //La requête a réussi mais l'appli client n'a pas besoin de quitter la page
            console.log("Burger supprimé")
        }
        else {
            return res.sendStatus(404); 
        }
    }
}

module.exports = burgerController;