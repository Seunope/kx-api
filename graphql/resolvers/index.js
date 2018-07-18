var UserResolver = require('./userResolver')

var Resolvers = {
    Query: {
        users: UserResolver.users,

    },

    Mutation : {
        signup: UserResolver.signup,
        login: UserResolver.login,  
    }
  };

  module.exports = Resolvers;