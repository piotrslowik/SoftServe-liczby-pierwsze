import { make } from './helpers';

const Make = require('../../Models/make');

const { origin, parseWithId } = require('./helpers');

const makeResolver = {
    makes: async () => {
        try {
            const makes = await Make.find();
            return makes.map(make => {
                return { 
                    ...parseWithId(make),
                    origin: origin.bind(this, make._doc.origin),
                };
            });
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    createMake: async args => {
        const make = new Make({
            make: args.makeInput.make,
            origin: origin.bind(this, make.makeInput.origin),
        });
        try {
            const result = await make.save();
            return parseWithId(result);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

export default makeResolver;
