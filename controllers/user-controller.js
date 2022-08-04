const User = require('../models/user-model');

const userController = {
    getAll : async (req, res) => {
        const users = await User.find();
        res.status(200).json(users);
    },



    getByID : async (req, res) => {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.sendStatus(404)
        }
        res.status(200).json(user);
    },



    create: async (req, res) => {
        console.log("Nouvel utilisateur enregistré !");

        const userToAdd = User(req.body);
        console.log(userToAdd);
        await userToAdd.save();
        res.status(200).json(userToAdd);
    },


    
    update : async (req, res) => {
        const id = req.params.id;

        const {email, firstname, lastname, adress } = req.body

        const userUpdated = await User.findByIdAndUpdate(id, {
            email,
            firstname,
            lastname,
            adress
        }, { returnDocument: 'after' });

        if(!userUpdated)
        {
            return res.sendStatus(404);
        }

        else {
            res.status(200) 
        }
    },
    delete : async (req, res) => {
        const id = req.params.id;

        const userToDelete = await User.findByIdAndDelete(id);
        
        if(!userToDelete){
            return res.sendStatus(404); //NotFound -> id
        }
        else 
        {res.sendStatus(204);
            console.log("Utilisateur supprimé")
        }
    }
}

module.exports = userController;