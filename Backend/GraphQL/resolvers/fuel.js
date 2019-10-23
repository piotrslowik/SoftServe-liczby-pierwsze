const Fuel = require('../../Models/fuel');

const { parseWithId } = require('./helpers');

const fuelResolver = {
    fuels: async () => {
        try {
            const fuels = await Fuel.find();
            return fuels.map(fuel => {
                return parseWithId(fuel);
            });
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    createFuel: async args => {
        const fuel = new Fuel({
            fuel: args.fuelInput.fuel,
        });
        try {
            const result = await fuel.save();
            return parseWithId(result);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
}

export default fuelResolver;
