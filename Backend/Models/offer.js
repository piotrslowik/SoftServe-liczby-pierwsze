const { Schema, model } = require('mongoose');

const offerSchema = new Schema ({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = model('Offer', offerSchema);
