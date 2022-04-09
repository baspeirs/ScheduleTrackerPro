const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    graphqlSync,
    GraphQLBoolean,
    GraphQLFloat
} = require("graphql");
const Models = require("../Models");

// ===== Custom Object Types =====

// create a custom object type for user
const userType = new GraphQLObjectType({
    name: "User",
    description: "Representation of User data",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: new GraphQLNonNull(GraphQLFloat) },
        manager: { type: new GraphQLNonNull(GraphQLBoolean) }
        // later we will add fields for time off requests and created dates
    })
});

// ===== Mutations =====
const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({
        addUser: {
            type: userType,
            description: "Add a User",
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                phoneNumber: { type: new GraphQLNonNull(GraphQLFloat) },
                manager: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve: (parent, args) => {
                const User = new Models.User({
                    username: args.username,
                    email: args.email,
                    name: args.name,
                    phoneNumber: args.phoneNumber,
                    manager: args.manager
                })
                return User
                .save()
                .then(result => console.log(result))
                .catch(err => {
                    console.error(err)
                    throw err
                });
            }
        }
        // add new queries here (object notation - dont forget to add a coma above)
    })
});

// ===== Query Types =====
const RootQueryType = new GraphQLObjectType({
    name: "RootQuery",
    description: "Root Query Type",
    fields: () => ({
        users: {
            type: new GraphQLList(userType),
            description: "List of Users",
            resolve: () => Models.User.find().then(result => {return result}).catch(err => { console.error(err) })
        }
    })
});

// ===== Return Schema =====

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

module.exports = schema;