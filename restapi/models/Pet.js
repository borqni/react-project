const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const petSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    categorie: {
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

    author: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Pet', petSchema);