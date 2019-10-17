const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdOffers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Offer',
        }
    ],
});

module.exports = model('User', userSchema);
