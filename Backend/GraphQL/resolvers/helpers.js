const User = require('../../Models/user');
const Origin = require('../../Models/origin');
const Make = require('../../Models/make');
const Offer = require('../../Models/offer');

const parseWithId = data => {
    return {
        ...data._doc,
        _id: data.id,
    }
};

module.exports = {
    parseOffer: offer => {
        return { 
            ...offer._doc,
            _id: offer.id,
            date: new Date(offer._doc.date).toISOString(),
            creator: user.bind(this, offer._doc.creator),
        };
    },
    parseWithId: data => {
        return parseWithId(data);
    },
    user: async userId => {
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
    },
    offers: async offerIDs => {
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
    },
    origin: async originId => {
        try {
            const origin = await Origin.findById(originId);
            return parseWithId(origin);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    make: async makeId => {
        try {
            const make = await Make.findById(makeId);
            return {
                ...parseWithId(make),
                // origin: this.origin.bind(this, make._doc.originId),
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
