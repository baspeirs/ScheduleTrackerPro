const express = require("express");
const mongoose = require("mongoose");
// const routes = require();
const schema = require("./Schema");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// using these to allow http requests from outside hosts (local host 3001 -> local host 3000)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "Post,GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200)
    }
    next();
  });

// database connection
// mongo db depricated options => useNewUrlParser \ useUnifiedTopology \ useFindAndModify \ useCreateIndex
// mongo db default setting ====>   true           \     true           \   false          \    true
mongoose.connect(process.env.MONGODB || "mongodb://localhost/scheduleStore");

// graphql route - see about making a module for this in the routes folder
// on the back end, we need to define the whole query query language for our front end's interpretation of the api
app.use("/graphql", graphqlHTTP({
    schema: schema.GraphQLSchema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
