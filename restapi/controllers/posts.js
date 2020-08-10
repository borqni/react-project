const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.News.find()
            .then((posts) => res.send(posts))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, title, image, like, comment } = req.body;
        const { _id } = req.user;

        models.News.create({ description, title, image, like, comment, author: _id })
            .then((createdPost) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPost } }),
                    models.News.findOne({ _id: createdPost._id })
                ]);
            })
            .then(([modifiedObj, postsObj]) => {
                res.send(postsObj);
            })
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.News.deleteOne({ _id: id })
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }
};