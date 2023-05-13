const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { MealType, RootQueryType, RootMutationType } = require('./models/GraphqlSchema');


// Define the root resolver for the schema
const rootResolver = {
  ...RootQueryType.fields,
  ...RootMutationType.fields,
};

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const mealsRouter = require('./routes/meals');

app.use('/', mealsRouter);
app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: RootQueryType,
      mutation: RootMutationType,
    }),
    rootValue: rootResolver,
    graphiql: true,
  })
);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});