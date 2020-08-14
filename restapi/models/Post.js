const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const postSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    like: {
        type: Number
    },

    comment: {
        type: String
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Post', postSchema);