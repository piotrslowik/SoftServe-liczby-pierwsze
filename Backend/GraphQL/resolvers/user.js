const User = require('../../Models/user');

const { hash } = require('bcryptjs');
const { offers, parseWithId } = require('./helpers');

const userResolver = {
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
            return parseWithId(user);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

module.exports =  userResolver;
