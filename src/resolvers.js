import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "Hello World with Graphql",
    greet: (root, { name }) => `Hello ${name}`,
    users: async () => await User.find()
  },
  Mutation: {
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async updateUser(_, { id, input }) {
      return await User.findByIdAndUpdate(id, input, { new: true });
    },
    async deleteUser(_, { id }) {
      return await User.findByIdAndDelete(id);
    }
  }
};
