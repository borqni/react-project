const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Pet.find().sort('-created_at')
            .then((pet) => res.send(pet))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, categorie, image, like } = req.body;
        const { _id } = req.user;

        models.Pet.create({ name, categorie, image, like, author: _id })
            .then((createdPet) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPet } }),
                    models.Pet.findOne({ _id: createdPet._id })
                ]);
            })
            .then(([modifiedObj, petObj]) => {
                res.send(petObj);
            })
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Pet.deleteOne({ _id: id })
            .then((removedPet) => res.send(removedPet))
            .catch(next)
    }
};