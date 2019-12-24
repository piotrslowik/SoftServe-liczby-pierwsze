const User = require('../../Models/user');
const Origin = require('../../Models/origin');
const Make = require('../../Models/make');
const Model = require('../../Models/model');
const Offer = require('../../Models/offer');
const Fuel = require('../../Models/fuel');

const parseWithId = data => {
    return {
        ...data._doc,
        _id: data.id,
    }
};
const offers = async offerIDs => {
    try {
        const offers = await Offer.find({_id: {$in: offerIDs}});
        return offers.map(offer => {
            return {
                ...parseWithId(offer),
                creator: user.bind(this, offer._doc.creator),
            };
        });
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
const user = async userId => {
    try {
        const user = await User.findById(userId);
        return {
            ...parseWithId(user),
            createdOffers: offers.bind(this, user._doc.createdOffers),
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
const origin = async originId => {
    try {
        const origin = await Origin.findById(originId);
        return parseWithId(origin);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
const make = async makeId => {
    try {
        const make = await Make.findById(makeId);
        return {
            ...parseWithId(make),
            origin: origin.bind(this, make._doc.originId),
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const model = async modelId => {
    try {
        const model = await Model.findById(modelId);
        return {
            ...parseWithId(model),
            origin: origin.bind(this, model._doc.originId),
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const fuel = async fuelId => {
    try {
        const fuel = await Fuel.findById(fuelId);
        return {
            ...parseWithId(fuel),
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    parseOffer: offer => {
        return { 
            ...offer._doc,
            _id: offer.id,
            date: new Date(offer._doc.date).toISOString(),
            make: make.bind(this, offer._doc.makeId),
            model: model.bind(this, offer._doc.modelId),
            fuel: fuel.bind(this, offer._doc.fuelId),
            creator: user.bind(this, offer._doc.creator),
        };
    },
    parseWithId: data => {
        return parseWithId(data);
    },
    user: async userId => {
        return await user(userId);
    },
    offers: async offerIDs => {
        return await offers(offerIDs);
    },
    origin: async originId => {
        return await origin(originId);
    },
    make: async makeId => {
        return await make(makeId);
    },
    fuel: async fuelId => {
        return await fuel(fuelId);
    }
}
