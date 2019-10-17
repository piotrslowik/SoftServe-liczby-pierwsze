const { Schema, model } = require('mongoose');

const makeSchema = new Schema ({
    make: {
        type: String,
        required: true,
    },
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Origin',
    },
});

module.exports = model('Make', makeSchema);
