const { Schema, model } = require('mongoose');

const originSchema = new Schema ({
    origin: {
        type: String,
        required: true,
    },
});

module.exports = model('Origin', originSchema);
