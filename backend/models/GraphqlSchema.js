const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');
const Meal = require('./meal.model');

// Define the Meal type
const MealType = new GraphQLObjectType({
  name: 'Meal',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLNonNull(GraphQLString) },
  }),
});

// Define the RootQuery type
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    meals: {
      type: GraphQLList(MealType),
      resolve: async () => {
        try {
          const meals = await Meal.find();
          return meals;
        } catch (err) {
          throw new Error('Error retrieving meals from database: ' + err.message);
        }
      },
    },
  },
});

// Define the RootMutation type
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMeal: {
      type: MealType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const meal = new Meal({
          name: args.name,
          price: args.price,
          description: args.description,
        });

        try {
          const newMeal = await meal.save();
          return newMeal;
        } catch (err) {
          throw new Error('Error creating meal in database: ' + err.message);
        }
      },
    },
  },
});

module.exports = {
  MealType,
  RootQueryType,
  RootMutationType,
};
