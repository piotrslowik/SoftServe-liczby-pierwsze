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
    input UserEditInput {
        email: String,
        password: String,
        id: ID!,
    }

    type Origin {
        _id: ID!,
        origin: String!,
    }
    input OriginInput {
        origin: String!,
    }
    input OriginEditInput {
        origin: String!,
        id: ID!,
    }

    type Make {
        _id: ID!,
        make: String!,
        origin: Origin!,
    }
    input MakeInput {
        make: String!,
        originId: ID!,
    }
    input MakeEditInput {
        make: String,
        originId: ID,
        makeId: ID!,
    }

    type Model {
        _id: ID!,
        model: String!,
        make: Make!,
    }
    input ModelInput {
        model: String!,
        makeId: ID!,
    }
    input ModelEditInput {
        model: String,
        makeId: ID,
        modelId: ID!,
    }

    type Fuel {
        _id: ID!,
        fuel: String!,
    }
    input FuelInput {
        fuel: String!,
    }
    input FuelEditInput {
        fuel: String!,
        id: ID!,
    }

    type RootQuery {
        offers: [Offer!]!
        makes: [Make!]!
        models(makeId: ID!): [Model!]!
        fuels: [Fuel!]!
        origins: [Origin!]!
    }
    type RootMutation {
        createOffer(offerInput: OfferInput): Offer
        deleteOffer(offerId: ID!): Model

        createUser(userInput: UserInput): User

        createOrigin(originInput: OriginInput): Origin
        editOrigin(originEditInput: OriginEditInput): Origin
        deleteOrigin(originId: ID!): Origin

        createFuel(fuelInput: FuelInput): Fuel
        editFuel(fuelEditInput: FuelEditInput): Fuel
        deleteFuel(fuelId: ID!): Fuel

        createMake(makeInput: MakeInput): Make
        editMake(makeEditInput: MakeEditInput): Make
        deleteMake(makeId: ID!): Make

        createModel(modelInput: ModelInput): Model
        editModel(modelEditInput: ModelEditInput): Model
        deleteModel(modelId: ID!): Model
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

module.exports = graphqlSchema;