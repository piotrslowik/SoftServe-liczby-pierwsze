const Model = require('../../Models/model');

const { make, parseWithId } = require('./helpers');

const modelResolver = {
    models: async () => {
        try {
            const models = await Models.find();
            return models.map(model => {
                return { 
                    ...parseWithId(model),
                    make: make.bind(this, make._doc.make),
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
            make: make.bind(this, model.modelInput.make),
        });
        try {
            const result = await model.save();
            return parseWithId(result);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

export default modelResolver;
