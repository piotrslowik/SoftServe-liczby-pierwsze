const offersResolver = require('./offer');
const userResolver = require('./user');
const originResolver = require('./origin');
const makeResolver = require('./make');
const modelResolver = require('./model');
const fuelResolver = require('./fuel');

const graphqlResolvers = {
    ...offersResolver,
    ...userResolver,
    ...originResolver,
    ...makeResolver,
    ...modelResolver,
    ...fuelResolver,
}

module.exports = graphqlResolvers;