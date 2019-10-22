const { hash } = require('bcryptjs');

const Offer = require('../../Models/offer');
const User = require('../../Models/user');
const Origin = require('../../Models/origin');
const Make = require('../../Models/make');
const Model = require('../../Models/make');
const Fuel = require('../../Models/fuel');

const graphqlResolvers = {
    offers: async () => {
        try {
            const offers = await Offer.find();
            return offers.map(offer => {
                return { 
                    ...offer._doc,
                    _id: offer.id,
                    date: new Date(offer._doc.date).toISOString(),
                    creator: user.bind(this, offer._doc.creator),
                };
            });
        }
        catch (error) {
            console.error(error);
        }
    },
    createOffer: async args => {
        const offer = new Offer({
            make: args.offerInput.make,
            model: args.offerInput.model,
            description: args.offerInput.description,
            price: args.offerInput.price,
            date: new Date(),
            year: args.offerInput.year,
            mileage: args.offerInput.mileage,
            photo: args.offerInput.photo,
            creator: '5da4fd3696b86f186c140515',
        });
        try {
            const creator = await User.findById('5da4fd3696b86f186c140515');
            creator.createdOffers.push(offer);
            await creator.save();
            const result = await offer.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
                date: new Date(offer._doc.date).toISOString(),
                creator: user.bind(this, result._doc.creator),
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteOffer: async args => {
        try {
            const offer = await Offer.findById(args.offerId);
            await Offer.deleteOne({_id: args.offerId});
            return {
                ...offer._doc,
                _id: offer.id
            }
        }
        catch (error) {
            console.error(error);
            throw error
        }
    },
    createUser: async args => {
        try {
            const existingUser = await User.findOne({email: args.userInput.email});
            console.log(existingUser, args.userInput);
            if (existingUser) {
                throw new Error('User with that e-mail address already exists');
            }
            else {
                const hashedPassword = await hash(args.userInput.password, 12);
                const newUser = new User({
                    email: args.userInput.email,
                    password: hashedPassword,
                });
                const result = await newUser.save();
                console.log(result);
                return {
                    ...result._doc,
                    password: null,
                    _id: newUser.id,
                    createdOffers: offers.bind(this, result._doc.createdOffers),
                };
            }
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteUser: async args => {
        try {
            const user = await User.findById(args.userId);
            await User.deleteOne({_id: args.userId});
            return {
                ...user._doc,
                _id: user.id
            }
        }
        catch (error) {
            console.error(error);
            throw error
        }
    },
    origins: async () => {
        try {
            const origins = await Origin.find();
            return origins.map(origin => {
                return { 
                    ...origin._doc,
                    _id: origin.id,
                };
            });
        }
        catch (error) {
            console.error(error);
        }
    },
    createOrigin: async args => {
        const origin = new Origin({
            origin: args.originInput.origin,
        });
        try {
            const result = await origin.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    editOrigin: async args => {
        const origin = Origin.findById(args.originEditInput.id);
        origin.origin = args.originEditInput.origin;
        try {
            const result = await origin.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteOrigin: async args => {
        try {
            const origin = await Origin.findById(args.originId);
            await Origin.deleteOne({_id: args.originId});
            return {
                ...origin._doc,
                _id: origin.id
            }
        }
        catch (error) {
            console.error(error);
            throw error
        }
    },
    makes: async () => {
        try {
            const makes = await Make.find();
            return makes.map(make => {
                return { 
                    ...make._doc,
                    _id: make.id,
                    origin: origin.bind(this, make._doc.origin),
                };
            });
        }
        catch (error) {
            console.error(error);
        }
    },
    createMake: async args => {
        const make = new Make({
            make: args.makeInput.make,
            origin: origin.bind(this, make.makeInput.origin),
        });
        try {
            const result = await make.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    models: async () => {
        try {
            const models = await Models.find();
            return models.map(model => {
                return { 
                    ...model._doc,
                    _id: model.id,
                    make: make.bind(this, make._doc.make),
                };
            });
        }
        catch (error) {
            console.error(error);
        }
    },
    createModel: async args => {
        const model = new Model({
            model: args.modelInput.model,
            make: make.bind(this, model.modelInput.make),
        });
        try {
            const result = await model.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    fuels: async () => {
        try {
            const fuels = await Fuel.find();
            return fuels.map(fuel => {
                return { 
                    ...fuel._doc,
                    _id: fuel.id,
                };
            });
        }
        catch (error) {
            console.error(error);
        }
    },
    createFuel: async args => {
        const fuel = new Fuel({
            fuel: args.fuelInput.fuel,
        });
        try {
            const result = await fuel.save();
            console.log(result);
            return {
                ...result._doc,
                _id: result.id,
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

const user = async userId => {
    try {
        const user = await User.findById(userId);
        return {
            ...user._doc,
            _id: user.id,
            createdOffers: offers.bind(this, user._doc.createdOffers)
        }
    }
    catch (error) {
        throw error;
    }
}

const offers = async offerIDs => {
    try {
        const offers = await Offer.find({_id: {$in: offerIDs}});
        return offers.map(offer => {
            return {
                ...offer._doc,
                _id:offer.id,
                creator: user.bind(this, offer._doc.creator),
            }
        })
    }
    catch (error) {
        throw error;
    }
}

const origin = async originId => {
    try {
        const origin = await Origin.findById(originId);
        return {
            ...origin._doc,
            _id: origin.id,
        }
    }
    catch (error) {
        throw error;
    }
}

const make = async makeId => {
    try {
        const make = await Make.findById(makeId);
        return {
            ...make._doc,
            _id: make.id,
            origin: origin.bind(this, make._doc.origin),
        }
    }
    catch (error) {
        throw error;
    }
}

module.exports = graphqlResolvers;