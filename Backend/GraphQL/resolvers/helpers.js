const User = require('../../Models/user');
const Origin = require('../../Models/origin');
const Make = require('../../Models/make');
const Offer = require('../../Models/offer');

export const parseOffer = offer => {
    return { 
        ...offer._doc,
        _id: offer.id,
        date: new Date(offer._doc.date).toISOString(),
        creator: user.bind(this, offer._doc.creator),
    };
}

export const parseWithId = data => {
    return {
        ...data._doc,
        _id: data.id,
    }
}

export const user = async userId => {
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
}

export const offers = async offerIDs => {
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
}

export const origin = async originId => {
    try {
        const origin = await Origin.findById(originId);
        return parseWithId(origin);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const make = async makeId => {
    try {
        const make = await Make.findById(makeId);
        return {
            ...parseWithId(make),
            origin: origin.bind(this, make._doc.origin),
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}