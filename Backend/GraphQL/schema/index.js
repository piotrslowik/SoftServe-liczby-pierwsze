const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`
    type Offer {
        _id: ID!,
        make: String!,
        model: String!,
        description: String!,
        price: Int!,
        date: String!,
        year: Int!,
        mileage: Int!,
        photo: String!,
        creator: User!,
    }
    input OfferInput {
        make: String!,
        model: String!,
        description: String!,
        price: Int!,
        date: String!,
        year: Int!,
        mileage: Int!,
        photo: String!,
    }

    type User {
        _id: ID!,
        email: String!,
        password: String,
        createdOffers: [Offer!],
    } 
    input UserInput {
        email: String!,
        password: String!,
    }

    type Origin {
        _id: ID!,
        origin: String!,
    }
    input OriginInput {
        origin: String!,
    }

    type Make {
        _id: ID!,
        make: String!,
        origin: Origin!,
    }
    input MakeInput {
        make: String!,
        origin: ID!,
    }

    type Model {
        _id: ID!,
        model: String!,
        make: Make!,
    }
    input ModelInput {
        model: String!,
        make: ID!,
    }

    type Fuel {
        _id: ID!,
        fuel: String!,
    }
    input FuelInput {
        fuel: String!,
    }

    type RootQuery {
        offers: [Offer!]!
        makes: [Make!]!
        models: [Model!]!
        fuels: [Fuel!]!
        origins: [Origin!]!
    }
    type RootMutation {
        createOffer(offerInput: OfferInput): Offer
        deleteOffer(offerId: ID!): Model
        createUser(userInput: UserInput): User
        createOrigin(originInput: OriginInput): Origin
        createFuel(fuelInput: FuelInput): Fuel
        createMake(makeInput: MakeInput): Make
        createModel(modelInput: ModelInput): Model
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

module.exports = graphqlSchema;