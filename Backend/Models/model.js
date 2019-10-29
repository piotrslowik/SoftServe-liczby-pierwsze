const { Schema, model } = require('mongoose');

const modelSchema = new Schema ({
    model: {
        type: String,
        required: true,
    },
    makeId: {
        type: Schema.Types.ObjectId,
        ref: 'Make',
    },
});

module.exports = model('Model', modelSchema);
