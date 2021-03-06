const Model = require('../../Models/model');

const { make, parseWithId } = require('./helpers');

const modelResolver = {
    models: async args => {
        try {
            const models = await Model.find({makeId: args.makeId});
            return models.map(model => {
                return { 
                    ...parseWithId(model),
                    make: make.bind(this, model._doc.makeId),
                };
            });
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    createModel: async args => {
        const model = new Model({
            model: args.modelInput.model,
            makeId: args.modelInput.makeId,
        });
        try {
            const result = await model.save();
            return {
                ...parseWithId(result),
                make: make.bind(this, result._doc.makeId),
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    editModel: async args => {
        try {
            const model = await Model.findById(args.modelEditInput.modelId);
            model.model = args.modelEditInput.model;
            model.makeId = args.modelEditInput.makeId;
            const result = await model.save();
            return {
                ...parseWithId(result),
                make: make.bind(this, result._doc.makeId),
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteModel: async args => {
        try {
            const model = await Model.findById(args.modelId);
            await Model.deleteOne({_id: args.modelId});
            return parseWithId(model);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

module.exports =  modelResolver;
