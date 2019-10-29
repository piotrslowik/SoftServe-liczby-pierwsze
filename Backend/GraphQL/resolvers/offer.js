const Offer = require('../../Models/offer');
const User = require('../../Models/user');

const { parseOffer, parseWithId } = require('./helpers');

const offerResolver = {
    offers: async () => {
        try {
            const offers = await Offer.find();
            return offers.map(offer => {
                return parseOffer(offer);
            });
        }
        catch (error) {
            console.error(error);
            throw error;
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
            return parseOffer(result);
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
            return parseWithId(offer);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports =  offerResolver;
