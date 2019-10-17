const { Schema, model } = require('mongoose');

const fuelSchema = new Schema ({
    fuel: {
        type: String,
        required: true,
    },
});

module.exports = model('Fuel', fuelSchema);
