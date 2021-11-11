import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema';

const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  return server;
};

export default async function () {
  const server = await startApolloServer(typeDefs, resolvers);

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api', server.getMiddleware());
  });
}
